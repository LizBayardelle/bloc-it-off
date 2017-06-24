Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :lists
    end

    resources :lists do
      resources :items, only: [:create]
    end

    resources :items, only: [:destroy]
  end
end
