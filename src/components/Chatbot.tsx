import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaRobot } from "react-icons/fa";
import Imgsource from "../assets/image.png";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content:
        "Hello there! I am CodeX your friendly bot 👋. Looking for anything specific? I can help you to find the services you're looking for 👇👇👇",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, content: inputValue, isUser: true },
      ]);
      setInputValue("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            content:
              "I'm sorry, I don't have enough information to answer that. Could you please provide more details?",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-4 right-4 w-full max-w-md mx-auto shadow-lg">
          <Card className="w-full">
            <CardHeader className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-t-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>
                    <img src={Imgsource} alt="CodeX Avatar" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold text-white">CodeX</p>
                  <p className="text-sm text-gray-200">
                    Your Friendly Assistant bot
                  </p>
                </div>
                <Button
                  onClick={toggleChatbot}
                  className="text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-9.54a.75.75 0 10-1.06 1.06L10 11.06l-2.47-2.54a.75.75 0 00-1.06 1.06L8.94 12l-2.54 2.47a.75.75 0 101.06 1.06L10 12.94l2.47 2.54a.75.75 0 001.06-1.06L11.06 12l2.54-2.47z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-auto p-4">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : ""
                    } items-start gap-3`}
                  >
                    {!message.isUser && (
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>Bot</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      } rounded-lg p-3 max-w-[70%]`}
                    >
                      <p>{message.content}</p>
                    </div>
                    {message.isUser && (
                      <Avatar className="w-8 h-8 shrink-0">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>User</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border p-2 flex items-center gap-2">
              <form
                onSubmit={handleSubmit}
                className="flex items-center w-full space-x-2"
              >
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1 resize-none rounded-lg p-2 border border-border focus:border-primary focus:ring-primary"
                  value={inputValue}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                <Button type="submit" className="shrink-0">
                  <SendIcon className="w-5 h-5" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="fixed bottom-4 right-4">
          <Button
            onClick={toggleChatbot}
            className="rounded-full p-3 bg-blue-600 text-white shadow-lg"
          >
            <FaRobot className="w-6 h-6" />
          </Button>
        </div>
      )}
    </>
  );
}

function SendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
