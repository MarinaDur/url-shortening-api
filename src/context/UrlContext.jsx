import { createContext, useContext, useEffect, useState } from "react";
import { shortenLink } from "../services/shortenUrl";

const UrlContext = createContext();

function UrlProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  async function handleSearch() {
    const data = await shortenLink(value);

    setSearchResults((prev) => {
      if (data !== undefined) {
        setError(false);
        const resultsLength = prev.length;
        return [
          ...prev,
          {
            id: resultsLength,
            longUrl: value,
            shortUrl: data,
          },
        ];
      } else {
        setError(true);
        return prev;
      }
    });

    setValue("");
  }

  useEffect(() => {
    if (searchResults.length > 0) {
      localStorage.setItem("urls", JSON.stringify(searchResults));
    }
  }, [searchResults]);

  useEffect(() => {
    const storedUrls = localStorage.getItem("urls");

    if (storedUrls && storedUrls.length > 0) {
      try {
        const parsedUrls = JSON.parse(storedUrls);

        if (Array.isArray(parsedUrls)) {
          setSearchResults(parsedUrls);
        } else {
          console.error("Invalid data format in local storage");
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error parsing JSON from local storage:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  }, []);

  function handleCopy(id) {
    const textToCopy = document.getElementById(`textToCopy-${id}`).innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(id);
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  }

  function handleSubmit(e) {
    if (e.key === "Enter") {
      handleSearch();
      e.preventDefault();
    }
  }

  return (
    <UrlContext.Provider
      value={{
        handleMenuToggle,
        isMenuOpen,
        handleValue,
        value,
        handleSearch,
        searchResults,
        handleCopy,
        isCopied,
        handleSubmit,
        error,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
}

function useUrl() {
  const context = useContext(UrlContext);
  if (context === undefined)
    throw new Error("UrlContext was used outside of the UrlProvider");
  return context;
}

export { UrlProvider, useUrl };
