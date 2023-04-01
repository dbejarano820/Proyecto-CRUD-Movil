class Student < ApplicationRecord
    has_many :student_courses
    has_many :courses, through: :student_courses
  
    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  end
  