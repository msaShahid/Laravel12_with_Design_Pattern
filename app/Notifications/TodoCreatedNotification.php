<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TodoCreatedNotification extends Notification
{
    use Queueable;

    protected $todo;

    /**
     * Create a new notification instance.
     */
    public function __construct($todo)
    {
        $this->todo = $todo;
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
        ->subject('A New To-Do Has Been Created')
        ->greeting('Hello!')
        ->line('A new to-do item has been successfully added to your list with the title : ' . $this->todo->title)
        ->action('View To-Do', url('/todos')) 
        ->line('Thank you for staying organized with our application!');

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
