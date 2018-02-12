Rails.application.routes.draw do

  scope module: :items do
    resources :past, only: [:index]
    resources :today, only: [:index]
    resources :tomorrow, only: [:index]
    resources :undone, only: [:index]
    resources :today_schedule, only: [:update, :destroy]
  end

  resources :tasks, only: [:create, :update, :destroy, :edit]
  resources :items, only: [:update, :destroy]

  authenticated :user do
    root 'items/today#index', as: :authenticated_root
  end

  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
