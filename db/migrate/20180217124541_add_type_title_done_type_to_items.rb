class AddTypeTitleDoneTypeToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :title, :string
    add_column :items, :done, :boolean, default: false
    add_column :items, :kind, :string
  end
end
