Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: { format: :json } do
    resources :users
  end
end
