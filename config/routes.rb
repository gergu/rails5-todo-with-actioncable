Rails.application.routes.draw do
  root to: 'todos#index'
  get 'todos/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
