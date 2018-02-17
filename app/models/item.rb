class Item < ApplicationRecord
  belongs_to :user

  scope :undone, -> { where(done: false) }
  scope :before, ->(date) { where('date <= ?', date) }
  scope :of, ->(date) { where(date: date) }
  scope :tasks, -> { where(type: "Task") }

end
