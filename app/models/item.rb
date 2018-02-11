class Item < ApplicationRecord
  belongs_to :user
  belongs_to :listable, polymorphic: true

  scope :undone, -> { where(done: false) }
  scope :before, ->(date) { where('date <= ?', date) }
  scope :of, ->(date) { where(date: date) }

end
