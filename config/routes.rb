Rails.application.routes.draw do
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :items, only: :index
      resources :orders, only: :create
    end
  end
end