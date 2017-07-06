Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :users do
      resources :lists
    end

    resources :lists do
      resources :items, only: [:create]
    end

    resources :items, only: [:destroy]
  end
end
