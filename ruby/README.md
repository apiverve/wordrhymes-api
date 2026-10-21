# Rhyming Words API - Ruby Gem

Rhyming Words finds matching rhymes for any query word, returning a list of rhyming words and a total match count. Paid plans can adjust the maximum number of rhymes returned.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_wordrhymes'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_wordrhymes
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_wordrhymes'

# Initialize the client
client = APIVerve::Wordrhymes::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  word: "blue",
  limit: 10
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ word: "blue", limit: 10 })
  puts response["data"]
rescue APIVerve::Wordrhymes::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Wordrhymes::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Wordrhymes::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "word": "blue",
    "rhymeCount": 10,
    "rhymes": [
      "deblois",
      "ballou",
      "bellew",
      "carilou",
      "chaloux",
      "clue",
      "flew",
      "flu",
      "flue",
      "glew"
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordrhymes?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordrhymes?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordrhymes?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
