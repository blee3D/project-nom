# Project-Nom 🍗
> This app was created as a capstone project for Launch Academy.

Project Nom is a recipe searching web app that integrates Spoonacular API with Ruby on Rails framework, and rendered with ReactJS. Users are able to search for recipes by ingredient, or cuisine type. Once a search is made, results will populate that include the recipe name, author, total time, and serving size. Upon clicking a specific recipe, users are redirected to the recipe's show page that will display additional info, which includes a checklist of ingredients and cooking directions.

# Setup
>
> Ruby 3.0.2 
>
> Rails 6.1.4.1 
> 
> Bundler 2.2.29 
> 

Once you have a local copy of the repo, run the following commands in the terminal:
```
bundle install
yarn install
```
Create PostgreSQL database, and migrate tables:
```
bundle exec rake db:create
bundle exec rake db:migrate
```
Run the following command, and then visit https://localhost:3000/ in your browser to view the app locally:
```
bundle exec rails s
```

# TODO List of Features
- Create menus, where users can plan out their weekly meal prep
- Generate grocery list from ingredients found in recipes and menus
- Nutritional facts
- Dietary labels

# Contribution Guidlines
No contributions are accepted at this time.
