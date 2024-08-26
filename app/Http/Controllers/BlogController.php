<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($page = 1)
    {
        $blogs = Blog::with(['author' => function ($query) {
            $query->select('id', 'name');
        }])->orderBy('id', 'desc')->paginate(10)->onEachSide(1);

        return Inertia::render('Blogs/Blogs', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function myBlogs()
    {
        $blogs = Blog::with(['author' => function ($query) {
            $query->select('id', 'name');
        }])->where('user_id', auth()->user()->id)
            ->orderBy('id', 'desc')->paginate(10)->onEachSide(1);
        return Inertia::render('Blogs/MyBlogs', [
            'blogs' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Blogs/AddBlogForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        //
        $data = $request->validated();

        Blog::create(
            [
                'user_id' => auth()->user()->id,
                'title' => $data['title'],
                'content' => $data['content']
            ]
        );

        return redirect(route('blog.my-blogs'));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $blog = Blog::with(['author' => function ($query) {
            $query->select('id', 'name');
        }])->find($id);
        return Inertia::render('Blogs/Blog', [
            'blog' => $blog
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $blog = Blog::find($id);
        return Inertia::render('Blogs/EditBlogForm', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, $id)
    {
        $data = $request->validated();
        Blog::where('id', $id)->update(
            [
                'title' => $data['title'],
                'content' => $data['content'],
            ]
        );
        return redirect(route('blog.my-blogs'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Blog::where('user_id', auth()->user()->id)->where('id', $id)->delete();
        return redirect(route('blog.my-blogs'));
    }
}
