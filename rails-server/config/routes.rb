Rails.application.routes.draw do
  resources :students
  resources :courses
  resources :matricula, only: [:index, :create, :destroy]
end