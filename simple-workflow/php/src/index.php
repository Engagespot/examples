<?php

require __DIR__ . '/../vendor/autoload.php';

use Engagespot\EngagespotClient;

$config = [
    'apiKey' => '',
    'apiSecret' => '',
];

// Create an instance of EngagespotClient
$engagespot = new EngagespotClient($config);

$notificationData = [
    'notification' => [
        'workflow' => [
            'identifier' => 'default_welcome_workflow',
        ]
    ],
    'sendTo' => [
        'recipients' => [
            'user-unique-identifier'
        ]
    ]
    ];

    try{
$response = $engagespot->send($notificationData);
    }catch(Exception $e){
        echo $e->getMessage();
    }

echo $response;
