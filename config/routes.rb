Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :items, only: [:index, :create, :update, :destroy]
    end
  end

  scope module: :items do
    resources :past, only: [:index]
    resources :today, only: [:index]
    resources :tomorrow, only: [:index]
    resources :undone, only: [:index]
    resources :today_schedule, only: [:update, :destroy]
  end

  resources :items, only: [:edit, :create, :update, :destroy]

  authenticated :user do
    root 'items/today#index', as: :authenticated_root
  end

  devise_for :users
  root to: 'pages#home'
end
