class Course < ApplicationRecord
    has_many :matriculas
    has_many :students, through: :matriculas
  
    validates :name, presence: true
    validates :description, presence: true
  end