module ItemsHelper
  def display_date_header(date)
    case date
    when Date.today then "Today"
    when Date.tomorrow then "Tomorrow"
    else
      "Pending"
    end
  end

end
