Rails.application.routes.draw do
  namespace :items do
    get 'past/index'
  end

  namespace :items do
    get 'tomorrow/index'
  end

  namespace :items do
    get 'today/index'
  end

  get 'items/create'

  get 'items/update'

  get 'items/destroy'

  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
