# Treasury Blog
This project was created for the coding test required by Treasury. It is a simple blog CRUD webpage.

# Requirements for setup
 - composer
 - docker

# Setup
1. Clone project and use the `main` branch
2. run `cd treasury-blog && composer install && cp .env.example .env`
3. run `./vendor/bin/sail up -d && ./vendor/bin/sail bash`
4. run `./vendor/bin/sail bash`
5. Inside the container, run `php artisan migrate`
6. On a new terminal, Run the project frontend using `./vendor/bin/sail npm run dev`
7. Go to localhost, register to the website
8. Inside the container, run `php artisan db:seed`

