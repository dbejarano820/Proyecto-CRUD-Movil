Rails.application.routes.draw do
  resources :students
  resources :courses
  resources :student_x_course, only: [:index, :create, :destroy]
end