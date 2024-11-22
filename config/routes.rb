Rails.application.routes.draw do
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :items, only: :index
      resources :deals, only: :index
      resources :orders, only: %i[index create]
    end
  end
end
