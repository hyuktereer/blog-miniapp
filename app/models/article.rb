class Article < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy
  validates :text, presence: true
  accepts_nested_attributes_for :images, allow_destroy: true
  
end