json.channel do
  json.extract! @channel, :title, :id
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :body, :author_id, :messageable_type, :messageable_id
    end
  end
end
