Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root "recipes#index"
  get "/recipes", to: "recipes#index"

  authenticated :user do
    root 'recipes#index'
  end

  unauthenticated :user do
    root 'recipes#landing', as: :unauthenticated
  end

end
