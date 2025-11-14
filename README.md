# Sovereign Instrument Engine

A cockpit-grade AI system for lawful negotiation, tender, and discharge of financial instruments, based on UCC and sovereign teachings.

This modular, dialogic AI system interprets, endorses, and discharges negotiable instruments in compliance with lawful frameworks like the UCC and Bill of Exchange Act. It encodes sovereign remedy beyond automation.

## Sovereign Philosophy

> "Every financial and bureaucratic interaction is a rite of passage. It modularizes confusion into clarity, rejection into remedy—empowering users with lawful dominion over commerce."

## Core Modules

The engine is built upon a set of distinct modules, each handling a specific part of the instrument lifecycle:

-   **InstrumentParser**: Detects type (order vs bearer), parses endorsements.
-   **EndorsementEngine**: Applies correct endorsement logic per UCC §3-204 to §3-206.
-   **TenderTracker**: Logs offers of payment, even if rejected.
-   **DischargeLogger**: Records lawful discharge events, including acceptance, compromise, or refusal.
-   **JurisdictionOverlay**: Routes logic based on land/air/water domains and equity remedy.
-   **CommentaryOverlay**: Integrates teachings from Brandon and David to guide AI reflection and user education.

## Why It Matters

-   Most systems treat forms as static; this system treats instruments as living declarations of intent.
-   Recognizes that rejected bills of exchange may count as lawful tender.
-   Distinguishes between payment, discharge, and settlement.

## Technology Stack

-   **React**: For building the user interface.
-   **TypeScript**: For type-safe JavaScript.
-   **Tailwind CSS**: For utility-first styling.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or yarn) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd sovereign-instrument-engine
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:

```sh
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.