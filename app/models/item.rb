class Item < ApplicationRecord
  belongs_to :user
  belongs_to :listable, polymorphic: true
end
