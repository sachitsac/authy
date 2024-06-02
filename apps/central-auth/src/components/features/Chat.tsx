"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import tomorrow from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";

const DisplayMarkdown = ({ content }: { content: string }) => (
  <Markdown
    children={content}
    components={{
      code(props) {
        const { children, className, node, ...rest } = props;
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, "")}
            language={match[1]}
            style={tomorrow}
          />
        ) : (
          <code {...rest} className={className}>
            {children}
          </code>
        );
      },
    }}
  />
);

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="w-[80vw] mx-auto mt-8 mb-16 border border-slate-200 rounded-xl overflow-hidden">
      <div className="h-[80vh] bg-gradient-to-t from-slate-100 p-6 flex space-y-1.5 overflow-scroll flex-col-reverse">
        <div className="flex flex-col">
          {messages.map((m) => (
            <>
              {m.role !== "user" && (
                <>
                  <div
                    key={m.id}
                    className="w-3/4 space-y-0.5 has-i.stream: empty f:hidden"
                  >
                    <div className="text-xs">Bot</div>
                    <div className="bg-slate-200 rounded-xl rounded-tl-none px-5 py-5 text-sm">
                      <DisplayMarkdown content={m.content} />
                    </div>
                  </div>
                </>
              )}
              {m.role === "user" && (
                <>
                  <div key={m.id} className="w-3/4 space-y-0.5 self-end">
                    <div className="text-xs text-right">You</div>
                    <div className="bg-slate-800 text-slate-50 rounded-xl rounded-tr-none px-3 py-1.5 text-sm">
                      <DisplayMarkdown content={m.content} />
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 p-3 border-t border-slate-200 flex space-x-2"
      >
        <div className="bg-white rounded-full grow relative flex items-center h-10 focus-within:ring-2 ring-insetring-blue-500">
          <input
            className="bg-transparent rounded-full grow px-4 py-2 text-sm h-10 focus:outline-0"
            placeholder="Ask meanything"
            value={input}
            onChange={handleInputChange}
          />
          <button className="bg-slate-800 text-slate-50 rounded-3xl text-sm font-medium size-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 • 20 20"
              fill="currentColor"
              className="size-4"
            >
              <path
                d="M3.105 2.288a. 75.75 0 0 0-.826.9571.414 4.92641.5 1.5 0 0 0 5.135 9.25h6.115a. 75. 75 0 0 1
0 1.545. 135a1.5 1.5 0 0 0-1.442 1.0861-1.414 4.926a. 75.75 0 0 0
.826.95 28.897 28.897 0
00 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0: 0 0 3.105 2.288Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
