class Student < ApplicationRecord
    has_many :matriculas, dependent: :destroy
    has_many :courses, through: :matriculas
  
    validates :name, presence: true
    validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  end
  