class Magic < ApplicationRecord
  has_many :address
  has_many :payment
end
