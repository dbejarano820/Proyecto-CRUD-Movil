class Course < ApplicationRecord
    has_many :matriculas, dependent: :destroy
    has_many :students, through: :matriculas
  
    validates :name, presence: true
    validates :description, presence: true
  end