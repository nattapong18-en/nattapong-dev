# Project Inventory

## Purpose of This Document

This document records factual information about projects that may appear on nattapong.dev.

It is an internal source document for content planning, case studies, design decisions, and implementation. It is not final public website copy.

Every claim should be verified against the current source code, repository, deployed application, documentation, or other available evidence before publication.

Projects should be described according to their actual maturity, ownership, scope, and results.

# Project Classification

The current project inventory contains:

- Rust Booking API
- CourtFit Basketball Shoe Chatbot

Learning exercises, coursework, small experiments, and guided tutorials should not be added as major projects unless they develop into substantial independent work.

Items such as the Rust book web server, thread pool implementation, Linux configuration, LearnCpp exercises, and university laboratories belong primarily in learning progress, technical notes, or experiments.

# Rust Booking API

## Basic Information

**Project name:** Booking API

**Working title:** Rust Booking API

**Project type:** Individual backend engineering project

**Status:** Functional MVP; ongoing learning project

**Current maturity:** Educational prototype / MVP

**Development period:** To be verified from the repository and commit history.

**Repository:**  
https://github.com/nattapong18-en/booking_api

**Live deployment:** To be verified from the repository or deployment dashboard.

## Project Summary

The Rust Booking API is a backend application developed to explore booking-system behavior using Rust.

The project focuses on practical backend concepts such as API design, persistent data, authentication, authorization, database integration, temporary data storage, and concurrent booking concerns.

It is primarily a learning and engineering project rather than a production booking platform.

## Problem and Motivation

The project was created to understand how a backend system should:

- Store booking and user information
- Connect to a relational database
- Authenticate users
- Restrict access to user-specific information
- Prevent unauthorized modification of data
- Handle multiple booking requests
- Coordinate backend components
- Manage errors and application state

The project was also intended to move beyond passive tutorial learning and develop understanding through implementation and debugging.

## Intended Users

The intended users have not yet been formally defined.

The current system should be treated as a technical prototype rather than a validated product for real customers.

## Nattapong’s Role

Nattapong designed and developed the backend application as an individual project.

Current responsibilities include:

- Backend development
- API design
- Data modeling
- Database integration
- Registration-related authentication implementation
- Authorization-related design
- Application-state handling
- Deployment configuration
- Debugging
- Documentation when available

The exact completion level of each responsibility should be verified from the repository before public presentation.

## Technologies

Technologies currently associated with the project include:

- Rust
- Axum
- PostgreSQL
- Redis
- JWT
- Docker
- Render
- Vercel
- Git
- GitHub

Each technology should be publicly listed only when its actual role in the current implementation can be explained.

## Technology Roles

- **Rust:** Main backend programming language
- **Axum:** Web framework and API routing
- **PostgreSQL:** Persistent relational data storage
- **Redis:** Temporary data storage or caching; the exact stored data and expiration behavior still need to be documented
- **JWT:** Intended for authentication or authorization; current implementation must be verified
- **Docker:** Local or deployment environment packaging
- **Render:** Backend deployment, if currently used
- **Vercel:** Exact role must be verified
- **Git and GitHub:** Source control and repository hosting

## Main Capabilities

Current verified or partially verified capabilities include:

- User registration
- Registration-related authentication logic
- HTTP GET operations
- HTTP POST operations
- HTTP PUT operations
- Database connectivity
- Persistent data handling
- Temporary data storage through Redis

The exact endpoint paths, request formats, authorization behavior, and completed booking workflow still need to be verified from the repository.

## Authentication Status

Authentication is currently implemented only around the registration stage.

The project should not yet claim a complete authentication and authorization system.

The following items still need verification or implementation:

- Login flow
- Password hashing
- Token creation
- Token validation
- Protected routes
- User identity extraction
- Authorization checks
- Token expiration
- Logout or token invalidation

## Architecture

The confirmed architecture has not yet been documented in this inventory.

A later review should identify:

- Application entry point
- API routes
- Request handlers
- Domain or service logic
- Database-access layer
- Registration flow
- Authentication flow
- Authorization checks
- Redis integration
- Error handling
- Configuration management
- Deployment structure

No architecture diagram should be published until these relationships are verified.

## Important Engineering Decisions

Potential engineering decisions to document include:

- Why Rust was chosen
- Why Axum was selected
- How application state is managed
- How database access is organized
- How users are registered
- How authentication is intended to work
- How authorization should be checked
- How booking conflicts are detected
- Whether database transactions are used
- Whether Redis participates in concurrency control
- How errors are represented
- How configuration and secrets are managed
- How the application is deployed

These decisions have not yet been fully documented and should not be invented.

## Main Challenges

Known learning challenges include:

- Understanding how the application connects to a database
- Designing how data should be stored
- Connecting API handlers to persistent data
- Designing registration and authentication
- Preventing users from accessing or modifying another user’s information
- Understanding asynchronous backend behavior
- Thinking about concurrent booking operations
- Debugging integration issues

## Current Result

A functional MVP exists and demonstrates at least part of the intended backend workflow.

The project provided practical experience with:

- Rust backend development
- HTTP APIs
- Database integration
- Persistent data
- Registration and authentication concepts
- Authorization concerns
- Application state
- Async behavior
- Deployment
- Integration debugging

The exact list of completed endpoints and verified behaviors must be confirmed from the current repository.

## Validation and Testing

No automated tests currently exist.

Current validation appears to rely on manual development and API testing.

Before making reliability claims, the project should eventually consider testing:

- User registration
- Database operations
- Invalid input
- Duplicate data
- Authentication behavior
- Authorization behavior
- Booking creation and updates
- Redis behavior
- Error responses
- Concurrent booking requests

## Limitations

Confirmed current limitations include:

- No automated tests
- Authentication is incomplete
- Authorization coverage has not been confirmed
- Exact endpoint behavior has not yet been documented
- Redis is used for temporary data, but its role and expiration behavior need clearer documentation
- Production readiness has not been established
- No verified load testing
- No confirmed concurrency guarantees
- No formal security review
- Monitoring and alerting have not been documented

## Lessons Learned

Important learning outcomes include:

- Backend concepts become clearer through implementation than through passive study alone.
- Database design affects API behavior and application structure.
- Authentication and authorization are separate concerns.
- Protecting user data requires checks throughout the request flow.
- Async code does not automatically guarantee correct concurrent behavior.
- Integration problems often reveal missing understanding between system layers.
- A functional MVP is different from a production-ready system.

## Evidence Available

Currently available evidence includes:

- GitHub repository
- Source code
- Commit history
- API routes
- Database-related code
- Registration-related authentication code
- Redis-related code
- Deployment configuration, if present
- Documentation, if present
- Manual test results, if preserved
- Screenshots or API-client captures, if available

## Evidence Still Needed

Useful evidence to collect later includes:

- Confirmed endpoint list
- Architecture diagram
- Registration and authentication flow
- Authorization examples
- Database schema
- Booking-conflict flow
- Test results
- Example requests and responses
- Deployment status
- Known error cases
- Screenshots from API testing tools
- Benchmark or concurrency results, if performed
- Clear explanation of Redis usage
- Project timeline
- Development reflections

## Publication Notes

Before publishing this project:

- Verify every listed technology.
- Confirm which features are implemented.
- State clearly that it is an educational MVP.
- Do not call it production-ready.
- Do not claim secure authentication without review.
- Do not claim correct concurrency handling without tests.
- Do not claim scalability without measurements.
- Explain Nattapong’s actual contribution.
- Separate completed behavior from planned behavior.
- Present limitations near the relevant claims.

# CourtFit Basketball Shoe Chatbot

## Basic Information

**Project name:** CourtFit

**Project type:** Individual full-stack and AI integration project

**Status:** Core development completed; testing and refinement ongoing

**Current maturity:** Educational and experimental web application

**Development period:** To be verified from the repository commit history.

**Repository:**  
https://github.com/nattapong18-en/chat-bot-test

**Deployment platform:** Vercel

**Live application:** To be verified from the repository or Vercel deployment dashboard.

## Project Summary

CourtFit is a web-based basketball shoe recommendation chatbot.

It helps users narrow down basketball shoe options based on factors such as:

- Playing position
- Playing style
- Court type
- Budget
- Foot shape
- Performance priorities

The application is a domain-specific AI project rather than a general-purpose chatbot.

## Problem and Motivation

Basketball players may need to compare many shoe models before finding options suitable for their needs.

CourtFit was created to provide a conversational way to narrow down those choices.

The project was also built to practice:

- Domain-specific chatbot design
- AI provider integration
- Streaming responses
- Responsive interface development
- Error handling
- API-key workflows
- Multi-provider support
- Recommendation-flow design
- User experience refinement

## Intended Users

Potential users include basketball players who want an initial shortlist of shoe types or models based on their preferences.

The project has not been validated as a professional footwear-fitting or purchasing service.

Recommendations are informational and should be independently verified.

## Nattapong’s Role

Nattapong designed and developed the complete application.

The work includes:

- Product concept
- Interface design
- Responsive frontend development
- Conversation-flow design
- Basketball-specific recommendation logic
- OpenAI integration
- Google Gemini integration
- Streaming-response behavior
- Provider switching
- Error handling
- Stop and Retry controls
- Bring Your Own Key workflow
- Dark-mode support
- Thai and English interaction
- Testing and refinement
- Deployment
- Project documentation

Each feature should be verified against the latest repository and deployed version before publication.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- OpenAI API
- Google Gemini API
- REST APIs
- Git
- GitHub
- Vercel

## Technology Roles

- **Next.js:** Application framework
- **React:** User interface development
- **TypeScript:** Typed application logic
- **Tailwind CSS:** Styling
- **shadcn/ui:** Interface components
- **OpenAI API:** AI response provider
- **Google Gemini API:** Alternative AI response provider
- **REST APIs:** Communication with AI services
- **Git and GitHub:** Version control and repository hosting
- **Vercel:** Deployment

## Main Capabilities

CourtFit currently supports:

- Basketball-specific recommendation conversations
- User input about playing position
- Court-type preferences
- Playing-style preferences
- Budget input
- Foot-shape considerations
- Performance-priority selection
- OpenAI provider support
- Google Gemini provider support
- Provider switching
- Thai conversations
- English conversations
- Streaming responses
- Stop control
- Retry control
- Responsive layouts
- Dark mode
- Quick recommendation controls
- User-provided API keys
- Client-side API-key handling during use

These features should be checked against the latest version before being described publicly as complete.

## Conversation and Recommendation Design

The chatbot is intended to collect relevant basketball-shoe preferences before presenting recommendations.

The current recommendation process may consider:

- Position
- Play style
- Court surface
- Budget
- Foot width or shape
- Cushioning preference
- Traction preference
- Stability preference
- Weight preference
- Durability preference

The exact prompt design and recommendation rules should be reviewed before publication.

## Important Engineering Decisions

Decisions that may be worth documenting include:

- Why the project uses multiple AI providers
- How provider switching is handled
- How streaming responses are implemented
- How Stop and Retry behavior works
- How user API keys are stored
- Why keys are not persisted
- How errors are displayed
- How conversation context is sent
- How Thai and English interaction is supported
- How responsive chat behavior is designed
- How the chatbot remains domain-specific
- How recommendations are framed to avoid false certainty

These decisions should be documented from the actual code rather than inferred.

## Main Challenges

Potential challenges include:

- Managing streaming API responses
- Supporting multiple providers with different APIs
- Handling user-provided keys safely
- Designing understandable error states
- Preserving conversation context
- Preventing the assistant from becoming too general
- Producing useful recommendations without a verified product database
- Maintaining a responsive interface
- Supporting both Thai and English
- Avoiding overconfident recommendation language
- Handling cancelled or retried requests

## Current Result

The core application is complete enough for testing and refinement.

It currently demonstrates:

- Domain-specific AI interaction
- Multi-provider integration
- Streaming chat responses
- User-controlled request handling
- Responsive frontend behavior
- BYOK workflow
- Basketball-specific recommendation entry points
- Bilingual conversation support

The application should still be presented as experimental because its recommendations are generated without a verified real-time product database.

## Browser Testing

CourtFit has been manually tested using:

- Google Chrome
- Mozilla Firefox
- Safari

The exact browser versions, operating systems, screen sizes, and test scenarios have not yet been documented.

Current testing should be described as manual compatibility testing rather than complete cross-browser validation.

## Validation and Testing

Current known testing includes:

- Manual chatbot interaction
- Google Chrome testing
- Mozilla Firefox testing
- Safari testing
- Thai-language conversation testing
- English-language conversation testing
- Provider switching
- Streaming response behavior
- Stop and Retry controls
- Responsive interface checking

The following still need clearer documentation:

- Browser versions
- Mobile devices tested
- Invalid API-key behavior
- Missing API-key behavior
- Network interruption behavior
- Provider failure behavior
- Accessibility testing
- Automated tests
- Recommendation-quality evaluation

## Limitations

CourtFit does not currently use a verified basketball-shoe product database or real-time retailer information.

It cannot reliably confirm:

- Current prices
- Stock availability
- Latest product specifications
- Retailer availability
- Regional availability
- Product authenticity
- Complete factual accuracy of recommendations

The application also does not currently include:

- User authentication
- Checkout
- Persistent chat history
- Verified product catalog
- Real-time inventory
- Commercial transaction functionality
- Professional footwear assessment
- Guaranteed injury prevention
- Guaranteed performance improvement

AI-generated recommendations should be independently verified before purchase.

## Privacy and API-Key Considerations

Users enter their API key through the web interface.

Based on the current description:

- The API key remains on the client side during use.
- The API key does not pass through the application’s backend.
- The key is not intentionally stored as persistent application data.

The exact browser storage behavior still needs to be verified from the source code.

Before publication, confirm whether the key is stored in:

- Component state
- Session storage
- Local storage
- Browser memory only

Also confirm:

- Whether the key disappears after a page refresh
- Whether it can appear in browser logs
- Whether error messages may expose part of the key
- Whether requests are sent directly from the browser to the AI provider

No strong privacy or security claim should be made without confirming the actual data flow.

## Lessons Learned

Potential learning outcomes include:

- Building a domain-specific AI application requires more than connecting an API.
- Provider abstractions must account for different request and streaming behavior.
- Streaming interfaces need clear cancellation, retry, and error states.
- Recommendations should communicate uncertainty.
- AI output is limited when the system lacks verified external data.
- User-provided API keys create usability, privacy, and security responsibilities.
- Responsive chat interfaces require careful handling of viewport and input behavior.
- Domain-specific prompts need testing and revision.

## Evidence Available

Available or expected evidence includes:

- Source code
- GitHub repository
- Deployed application
- Screenshots
- Responsive-interface demonstrations
- API integration logs
- Build validation results
- Project documentation
- Live chatbot testing
- Example conversations
- Error-state demonstrations
- Provider-switching behavior

## Evidence Still Needed

Useful evidence to collect includes:

- Live application URL
- Development timeline
- Architecture overview
- Provider abstraction explanation
- Streaming sequence diagram
- API-key data-flow diagram
- Confirmed storage behavior
- Example recommendation conversations
- Test matrix
- Responsive screenshots
- Error-state screenshots
- Accessibility review
- Performance review
- Known browser limitations
- Recommendation-quality evaluation
- Clear project status history

## Publication Notes

Before publishing CourtFit:

- Verify every feature against the latest build.
- Add the confirmed deployment link.
- Clearly label it as educational and experimental.
- Do not describe recommendations as verified product advice.
- Do not claim real-time price or inventory knowledge.
- Explain the absence of a verified product database.
- Verify and clearly explain API-key handling.
- Do not claim key security without reviewing the data flow.
- Separate implemented features from planned improvements.
- Show recommendation uncertainty and limitations.
- Avoid implying commercial or professional footwear expertise.

# Cross-Project Comparison

## Shared Evidence

Both projects can demonstrate:

- Independent project development
- Practical implementation
- Debugging
- API integration
- Deployment experience
- Iterative learning
- Limitations and incomplete maturity
- Use of Git and GitHub

## Different Engineering Emphasis

The Rust Booking API primarily demonstrates:

- Backend development
- Rust
- HTTP APIs
- Databases
- Registration and authentication concepts
- Authorization concerns
- Concurrency concerns
- Backend architecture

CourtFit primarily demonstrates:

- Full-stack web development
- User-interface implementation
- AI API integration
- Streaming responses
- Multi-provider support
- Domain-specific conversation design
- Responsive design
- User-controlled API-key workflows

## Current Presentation Priority

No final featured-project priority has been selected.

The Rust Booking API may provide stronger evidence for backend and systems direction.

CourtFit may provide stronger visible evidence because it includes a complete user-facing interface and live interaction.

Final prominence should depend on:

- Current career direction
- Repository quality
- Available evidence
- Technical depth
- Project maturity
- Visual artifacts
- Accuracy of documented claims
- Relevance to the graduation project direction

# Inventory Maintenance

This document should be updated when:

- A project feature is completed
- A feature is removed
- A deployment changes
- A repository becomes public
- Testing evidence is added
- A limitation is discovered
- A project status changes
- A project is paused or archived
- A public case study is written
- New evidence becomes available

Historical changes should not be silently rewritten when they are relevant to the project’s development story.

# Open Project Questions

## Rust Booking API

- What are the exact endpoint paths?
- What does each GET, POST, and PUT endpoint do?
- What is the current database schema?
- How is registration implemented?
- Is login implemented?
- Is password hashing implemented?
- Are JWT tokens created and validated?
- How is authorization enforced?
- What temporary data is stored in Redis?
- Does Redis data expire?
- Are database transactions used?
- How are booking conflicts handled?
- Is the application currently deployed?
- Which technical decisions are most important?
- What evidence can be published safely?

## CourtFit

- What is the confirmed live deployment URL?
- Is the API key stored only in React state or browser memory?
- Does the key survive a page refresh?
- Are requests sent directly from the browser to the providers?
- What conversation history is sent to providers?
- How is streaming implemented?
- How does provider switching work?
- Which operating systems and browser versions were tested?
- Were mobile devices tested?
- What accessibility testing has been completed?
- What recommendation tests exist?
- Which screenshots and demonstrations best explain the project?
- What improvements are currently planned?

