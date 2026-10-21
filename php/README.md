# Rhyming Words API - PHP Package

Rhyming Words finds matching rhymes for any query word, returning a list of rhyming words and a total match count. Paid plans can adjust the maximum number of rhymes returned.

## Installation

Install via Composer:

```bash
composer require apiverve/wordrhymes
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Wordrhymes\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'word' => 'blue',
    'limit' => 10
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Wordrhymes\Client;
use APIVerve\Wordrhymes\Exceptions\APIException;
use APIVerve\Wordrhymes\Exceptions\ValidationException;

try {
    $response = $client->execute(['word' => 'blue', 'limit' => 10]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordrhymes?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordrhymes?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordrhymes?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
