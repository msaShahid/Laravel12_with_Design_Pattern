<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewUserNotification extends Notification
{
    use Queueable;
    public $user;

    /**
     * Create a new notification instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('Hey Admin.')
            ->line('A new user has registered.')
            ->subject('New User Registration Notification')
            ->greeting('Hello!')
            ->line('Please review the new user details.')
            ->line('User Details: ' . $user->name)
            ->line('Registration Date: ' . $user->created_at->format('Y-m-d H:i:s'))
            ->line('If you have any questions, feel free to reach out.')
            ->line('This is an automated notification.')
            ->line('Best regards,')
            ->line('We appreciate your support!')
            ->line('This message was sent to notify you of the new registration.')
            ->line('Please find the action below:')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
