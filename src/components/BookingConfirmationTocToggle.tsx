import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useLocation } from "@docusaurus/router";

function BookingConfirmationTocToggleInner() {
  const location = useLocation();

  useEffect(() => {
    const product = new URLSearchParams(location.search).get("product");
    const isBookingPages = product === "booking-pages";

    function updateToc() {
      document.querySelectorAll(".table-of-contents a").forEach((link) => {
        const href = link.getAttribute("href") || "";
        const listItem = link.closest("li");
        if (!listItem) {
          return;
        }

        const isBookingConfirmationPayload =
          href === "#booking-confirmation-data-payload";
        const isBookingCalendarEvent =
          href === "#oncehubbooking_calendarloaded" ||
          href === "#oncehubbooking_calendartime_slot_selected" ||
          href === "#oncehubbookingscheduled";

        if (isBookingPages) {
          if (isBookingConfirmationPayload) {
            listItem.style.display = "";
          } else if (isBookingCalendarEvent) {
            listItem.style.display = "none";
          } else {
            // All other headings remain visible for Booking Pages
            listItem.style.display = "";
          }
        } else {
          if (isBookingConfirmationPayload) {
            listItem.style.display = "none";
          } else {
            listItem.style.display = "";
          }
        }
      });
    }

    function handleTocLinkClick(e: MouseEvent) {
      const link = e.target as HTMLAnchorElement;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return;
      }

      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      // Scroll only the main article area, not the sidebars
      const article = document.querySelector("article");
      if (article) {
        const targetRect = target.getBoundingClientRect();
        const articleRect = article.getBoundingClientRect();
        const scrollOffset =
          targetRect.top - articleRect.top + article.scrollTop;
        article.scrollIntoView({ behavior: "smooth", block: "start" });
        // Also update the hash for browser history
        window.location.hash = href;
      } else {
        // Fallback if article element not found
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    updateToc();

    const toc = document.querySelector(".table-of-contents");
    if (!toc) {
      return undefined;
    }

    // Add click handler to TOC links to prevent sidebar scrolling
    const tocLinks = toc.querySelectorAll("a");
    tocLinks.forEach((link) => {
      link.addEventListener("click", handleTocLinkClick);
    });

    const observer = new MutationObserver(() => {
      updateToc();
      // Re-attach click handlers to any newly added links
      const allLinks = toc.querySelectorAll("a");
      allLinks.forEach((link) => {
        link.removeEventListener("click", handleTocLinkClick);
        link.addEventListener("click", handleTocLinkClick);
      });
    });
    observer.observe(toc, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      tocLinks.forEach((link) => {
        link.removeEventListener("click", handleTocLinkClick);
      });
    };
  }, [location.search]);

  return null;
}

export default function BookingConfirmationTocToggle() {
  return (
    <BrowserOnly>{() => <BookingConfirmationTocToggleInner />}</BrowserOnly>
  );
}
