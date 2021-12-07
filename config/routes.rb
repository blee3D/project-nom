Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "recipes#index"
  get "/recipes", to: "recipes#index"

  authenticated :user do
    root 'recipes#index' #-> if user is logged in
    # resources :controller #-> ONLY available for logged in users
  end

  unauthenticated :user do
    root 'recipes#landing', as: :unauthenticated #-> if user is not logged in
  end

end