Rails.application.routes.draw do
  resources :students
  resources :courses
  resources :matriculas, only: [:index, :create, :destroy]
end