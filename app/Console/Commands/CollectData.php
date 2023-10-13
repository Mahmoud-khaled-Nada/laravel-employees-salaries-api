<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Post;

class CollectData extends Command
{
    protected $signature = 'data:collect';

    protected $description = 'Collect data from API and store it in the database';

    public function handle()
    {
        try {
            $apiUrl = 'https://jsonplaceholder.typicode.com/posts';
            $apiData = json_decode(file_get_contents($apiUrl), true);
            foreach ($apiData as $postData) {
                Post::create([
                    'userId' => $postData['userId'],
                    'title' => $postData['title'],
                    'body' => $postData['body'],
                ]);
            }

            $this->info('Data collection successful');
        } catch (\Exception $e) {
            $this->error('Error occurred while collecting data: ' . $e->getMessage());
        }
    }
}

