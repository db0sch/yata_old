class ChangeDateTimeToDateInItems < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :date, :date
  end
end
