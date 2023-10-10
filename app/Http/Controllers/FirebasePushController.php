<?php

namespace App\Http\Controllers;
use Kreait\Laravel\Firebase\Facades\Firebase;  
use Kreait\Firebase\Messaging\CloudMessage;
use Illuminate\Http\Request;

class FirebasePushController extends Controller
{
    protected $notification;

    public function __construct()
    {
        $this->notification = Firebase::messaging();
    }

    
    public function setToken(Request $request)
    {
        $token = $request->input('fcm_token');
        $request->user()->update([
            'fcm_token' => $token
        ]); //Get the currrently logged in user and set their token
        return response()->json([
            'message' => 'Successfully Updated FCM Token'
        ]);
    }

    public function notification(Request $request)
    {
        $FcmToken = auth()->user()->fcm_token;
        $title = $request->input('title');
        $body = $request->input('body');
        $message = CloudMessage::fromArray([
        'token' => $FcmToken,
        'notification' => [
            'title' => $title,
            'body' => $body
            ],
        ]);

    $this->notification->send($message);
    }
}
