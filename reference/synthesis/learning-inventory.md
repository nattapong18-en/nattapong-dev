# Learning Inventory

## Purpose of This Document

This document records Nattapong’s learning progress, coursework, guided exercises, technical experiments, and developing areas of understanding that may support nattapong.dev.

It is an internal source document for content planning.

It is not final public website copy.

Items in this document should not automatically be presented as major projects. They may later become:

- Learning progress entries
- Technical notes
- Experiments
- Supporting evidence for projects
- Coursework summaries
- Research preparation records

Claims should match the actual level of understanding and available evidence.

# Learning Classification

Learning material should be grouped according to what it best demonstrates.

## Learning Progress

Use for:

- Changes in understanding
- Milestones
- Skills developed over time
- Important mistakes
- Revisions in thinking
- Connections between study and practical work

## Technical Notes

Use for:

- Explanations worth preserving
- Implementation discoveries
- Concepts that can help future work
- Debugging knowledge
- Reusable technical understanding

## Experiments

Use for:

- Focused attempts to test behavior
- Small technical validations
- Comparisons
- Tool or configuration trials
- Measurable observations

## Coursework

Use for:

- University topics
- Laboratory work
- Structured assignments
- Concepts that support engineering direction

Coursework should not be presented as a major project unless it became substantial independent work.

# C and C++

## Current Status

Nattapong is currently learning C++ through LearnCpp.

The current work belongs to ongoing learning progress rather than professional experience.

## Current Focus

Topics currently associated with C and C++ include:

- Basic syntax
- Control flow
- Functions
- Data types
- Memory behavior
- Pointers and references
- Object-oriented programming
- Standard library usage
- Compilation
- Debugging
- Comparison with Rust

The exact completed chapters and exercises still need to be documented.

## Why This Area Matters

C and C++ are relevant to Nattapong’s interests in:

- Systems programming
- Embedded software
- Computer architecture
- Performance
- Game development
- Compiler development
- Reverse engineering

## Evidence Available

Possible evidence includes:

- LearnCpp exercise code
- Small programs
- Notes
- Debugging records
- Comparisons between C++, C, and Rust
- University programming assignments

## Evidence Still Needed

- Current LearnCpp chapter or section
- Completed exercises
- Strongest example program
- Common mistakes encountered
- Concepts that remain unclear
- Any code suitable for publication

## Publication Notes

Do not describe C++ as a mastered language.

Present it as active learning with evidence from exercises and practical use.

# Rust

## Current Status

Nattapong has studied the main material in *The Rust Programming Language* and has used Rust in practical backend and systems-oriented work.

The current level is beyond introductory syntax but still developing toward production engineering experience.

## Core Concepts Studied

- Ownership
- Borrowing
- References
- Lifetimes
- Pattern matching
- Enums
- Structs
- Traits
- Generics
- Error handling
- Iterators
- Closures
- Smart pointers
- Threads
- Channels
- Shared state
- Concurrency
- Basic asynchronous programming
- TCP networking
- Web server implementation

## Important Learning Evidence

- Multithreaded web server from the final chapters of the Rust book
- Thread pool implementation
- HTTP request parsing
- TCP listener usage
- Request and response handling
- Ownership and borrowing debugging
- Rust exercises
- Axum backend development
- SQL database integration
- Rust Booking API

## Current Understanding

The strongest current understanding is around:

- Ownership
- Borrowing
- Basic lifetime reasoning
- Memory safety concepts
- Error handling
- Basic concurrency
- Building backend services with Rust

Areas that still require deeper experience include:

- Advanced lifetime design
- Unsafe Rust
- Performance profiling
- Advanced async architecture
- Production observability
- Library design
- Large-codebase organization
- Security review
- Long-term maintenance

## Important Learning Milestones

### Ownership and Borrowing

This was one of the first major Rust concepts studied.

The main learning outcome was understanding that memory safety is enforced through ownership rules rather than garbage collection.

### Lifetimes

Lifetimes were initially difficult because they describe relationships among references rather than runtime duration.

The current understanding is sufficient for common borrowing situations, but advanced lifetime design still needs more practice.

### Thread Pool

The thread pool exercise introduced:

- Worker threads
- Message passing
- Shared receivers
- Arc
- Mutex
- Graceful shutdown
- Joining threads

This belongs primarily to learning progress and systems-oriented evidence.

### Web Server

The Rust book web server introduced:

- TCP listeners
- Reading HTTP requests
- Basic routing
- Status responses
- Content length
- Thread pools
- Concurrent request handling

This should be presented as a guided implementation with personal debugging and extensions, not as a fully original production server.

### Axum and Backend Development

Using Axum helped connect Rust concepts to practical API development.

Important areas include:

- Routing
- Handlers
- State
- JSON
- Path parameters
- Async functions
- Database integration
- Error handling

## Main Challenges

- Borrow checker errors
- Moved values
- Shared state
- Handler trait errors
- Database connection issues
- Async ownership
- Struct and database field mismatches
- Understanding where responsibilities should live in a backend application

## Lessons Learned

- Rust’s safety model becomes clearer through debugging real ownership problems.
- Async programming adds architectural and ownership complexity.
- Framework usage is easier when HTTP fundamentals are understood.
- Backend design requires more than route creation.
- Database, authentication, state, and errors must be designed together.
- Guided exercises become more valuable when extended and reflected on.

## Evidence Available

- Rust source code
- Thread pool implementation
- Web server implementation
- Axum exercises
- Booking API repository
- Debugging history
- Notes and previous questions
- Git history

## Evidence Still Needed

- Clean example code
- Selected code excerpts
- Architecture explanation
- Timeline of milestones
- Before-and-after understanding
- Tests
- Benchmarks
- Notes suitable for publication

## Publication Notes

Do not claim complete mastery of Rust.

Distinguish guided Rust book work from independent project work.

Use the Booking API as the strongest independent evidence.

# Backend Development

## Current Status

Backend development is the strongest practical software area in Nattapong’s current learning record.

The main evidence comes from the Rust Booking API and supporting Axum, HTTP, and database exercises.

## Topics Studied or Practiced

- HTTP requests and responses
- REST-style APIs
- Routing
- JSON
- Path parameters
- Application state
- Async request handling
- Database connections
- Persistent data
- Authentication concepts
- Authorization concerns
- Error handling
- Deployment
- Redis
- PostgreSQL
- JWT
- Docker

## Main Practical Evidence

- Rust Booking API
- Axum exercises
- SQLx database integration
- HTTP server from scratch
- Thread pool
- Manual API testing

## Important Learning Progress

The most important shift was moving from learning isolated syntax to seeing how a backend system connects multiple parts:

- Request handling
- Application logic
- Database
- Authentication
- Authorization
- State
- Deployment
- Error handling

Database integration was a major challenge because it required understanding both code and data design.

Authentication work introduced the difference between proving identity and controlling access to protected information.

## Current Strengths

- Understanding the basic structure of an API
- Building routes and handlers
- Connecting application code to a database
- Working with async Rust
- Debugging integration problems
- Understanding why authentication and authorization matter

## Areas for Deeper Study

- API versioning
- Input validation
- Transactions
- Concurrency correctness
- Idempotency
- Rate limiting
- Caching strategy
- Testing
- Logging
- Monitoring
- Threat modeling
- Security hardening
- Deployment reliability
- System design at scale

## Evidence Available

- Booking API repository
- Source code
- Database code
- API handlers
- Manual testing
- Deployment configuration
- Development notes

## Publication Notes

Do not present backend knowledge as senior-level system design experience.

Frame it as practical undergraduate-level development with clear evidence and honest limitations.

# HTTP and Web Server Fundamentals

## Current Status

Nattapong has practiced HTTP fundamentals by implementing a simple server in Rust.

## Topics Practiced

- TCP listener
- Reading request lines
- Headers
- Request termination
- Routing
- Status codes
- 200 responses
- 404 responses
- Content-Length
- Static content
- Concurrent handling through a thread pool

## Learning Value

This work helped explain what a web framework abstracts.

It also made later Axum development easier to understand because request handling, routing, and responses were no longer entirely hidden.

## Evidence Available

- Rust web server code
- Thread pool code
- Manual browser testing
- Request parsing logic
- Response construction

## Classification

This is guided learning and supporting technical evidence, not a major standalone project.

# Linux and Development Environment

## Current Status

Linux is Nattapong’s primary environment for:

- Coding
- University work
- Research
- Writing
- Browsing
- Terminal workflows
- Development tools

The current distribution is CachyOS with KDE Plasma.

Nattapong previously experimented with Hyprland but stopped using it because it did not fit the current hardware and workflow.

## Areas Practiced

- Linux installation and daily use
- KDE Plasma
- Hyprland experimentation
- GRUB configuration
- Boot message behavior
- System logs
- Kitty terminal
- tmux
- Neovim
- Fonts and themes
- Shell-based workflow
- Troubleshooting configuration issues

## Important Learning Experience

One early customization goal was hiding unnecessary boot messages and changing the visible boot process.

This involved:

- Investigating boot behavior
- Editing configuration
- Using scripts or commands
- Testing changes
- Recovering from mistakes
- Using AI tools and external documentation for guidance

This should be presented as assisted troubleshooting and learning, not independent operating-system engineering.

## Terminal-Centered Workflow

Nattapong has intentionally developed a terminal-centered workflow using:

- Kitty
- tmux
- Neovim
- Shell commands
- Git
- CLI development tools

This workflow is now used regularly.

## Main Lessons

- Linux configuration requires understanding where responsibility belongs.
- Small visual changes may involve bootloader, system, desktop, or terminal configuration.
- Documentation and logs are essential for troubleshooting.
- AI assistance is useful when combined with testing and verification.
- A development environment should support work rather than become endless customization.

## Areas for Deeper Study

- Linux internals
- Processes
- Memory
- Filesystems
- Permissions
- Networking
- System calls
- Debugging tools
- System programming
- Reverse engineering
- Security
- Service management

## Evidence Available

- Configuration files
- Terminal configuration
- tmux configuration
- Neovim configuration
- Screenshots
- Git repositories, if configuration is version-controlled
- Personal troubleshooting notes

## Publication Notes

Avoid turning Linux customization into a claim of system administration expertise.

Focus on daily use, problem-solving, workflow development, and areas of continued study.

# Computer Engineering Coursework

## Current Status

University coursework provides the broad technical foundation behind Nattapong’s current direction.

Most coursework belongs in learning progress, selected notes, or experiments rather than major projects.

## Relevant Areas

### Digital Logic

Topics include:

- Logic gates
- Boolean algebra
- De Morgan’s law
- Adders
- Subtractors
- Multiplexers
- HDL
- Digital design

Possible evidence:

- Add16
- NOT16
- Multiplexer exercises
- 16-bit subtractor
- Nand2Tetris work

### Computer Architecture

Topics include:

- Low-level computation
- CPU concepts
- Memory
- Instruction execution
- Logic design
- Nand2Tetris
- Hardware/software relationships

### Computer Networks

Topics include:

- Network devices
- Switching
- VLANs
- Console access
- Telnet
- SSH
- IP interfaces
- Cisco laboratory work

### Data Communication

Topics include:

- Frames
- Bit-oriented and byte-oriented protocols
- Bit stuffing
- Checksums
- CRC
- Coding rate
- Error detection
- Modulation
- Digital communication

### Embedded Systems and Microcontrollers

Topics include:

- Arduino
- Digital input and output
- Sensors
- Embedded logic
- Hardware/software integration

Possible evidence:

- Arduino UNO Dino Game coursework
- Microcontroller exercises
- Tinkercad simulations

### Discrete Mathematics and Formal Concepts

Topics include:

- Logic
- CNF and DNF
- Quantifiers
- Graph theory
- Automata
- Probability
- Combinatorics

### Algorithms and Programming

Topics include:

- C
- Python
- Data structures
- Algorithmic reasoning
- Small programming exercises

## Content Selection Principles

Coursework should appear publicly only when it:

- Connects to Nattapong’s engineering direction
- Shows meaningful progress
- Supports a project or research topic
- Can be explained clearly
- Includes useful evidence
- Offers more value than simply listing a completed class

## Evidence Still Needed

- Course names
- Dates or academic periods
- Strongest assignments
- Laboratory reports
- Diagrams
- Code
- Reflection
- Connection to current engineering interests

# Embedded Systems and IoT Learning

## Current Status

Embedded systems and IoT are important areas of interest but currently have less independent project evidence than backend development.

## Topics of Interest

- Microcontrollers
- Embedded software
- Sensors
- IoT devices
- Wireless communication
- Hardware/software interaction
- Resource-constrained systems
- Edge AI
- TinyML

## Existing Evidence

- Arduino coursework
- Microcontroller learning
- Computer Engineering classes
- Research preparation
- Interest in sensor-based intelligent devices

## Areas for Development

- C and C++ for embedded systems
- Real-time constraints
- Interrupts
- Peripheral interfaces
- Wireless protocols
- Power consumption
- Memory constraints
- Embedded testing
- Hardware debugging
- Deployment of AI models on constrained devices

## Publication Notes

Present this as a developing direction and research interest, not an established specialization.

# Networking Learning

## Current Status

Networking is both a curriculum area and a possible career direction.

## Topics Studied or Explored

- Network engineering
- Switching
- VLANs
- Cisco devices
- Console access
- Telnet
- SSH
- IP configuration
- Wireless networking
- Network architecture
- Data center networking
- Software-defined networking
- Network automation
- Network security

## Existing Evidence

- Cisco laboratory work
- Data communication coursework
- Network troubleshooting exercises
- Configuration commands
- University assignments

## Areas for Deeper Study

- Routing
- Network automation
- Linux networking
- Packet analysis
- Wireless systems
- SDN
- Network programmability
- Network security
- Data center architecture

## Publication Notes

Avoid presenting coursework as professional network engineering experience.

Use selected labs or notes to show foundational understanding and development.

# Cybersecurity Learning

## Current Status

Cybersecurity is an exploration area.

Nattapong is currently more interested in defensive security and Blue Team work, while also wanting to understand Red Team techniques.

## Areas of Interest

- Defensive security
- System hardening
- Network security
- Authentication
- Authorization
- Logging
- Monitoring
- Incident understanding
- Offensive-security fundamentals
- Reverse engineering

## Existing Connections

- Authentication and authorization in the Booking API
- Linux use
- Networking coursework
- Interest in system programming
- Interest in reverse engineering

## Areas for Deeper Study

- Threat modeling
- Secure coding
- Web security
- Network monitoring
- SIEM concepts
- Incident response
- Vulnerability analysis
- Binary analysis
- Malware analysis
- Penetration testing fundamentals

## Publication Notes

Do not claim Blue Team or Red Team competency without supporting exercises, labs, certifications, or projects.

# AI and LLM Integration Learning

## Current Status

The strongest current AI-related evidence is CourtFit.

The broader interest includes using AI in engineering workflows and applying AI to embedded systems.

## Topics Practiced

- OpenAI API integration
- Google Gemini API integration
- Provider switching
- Streaming responses
- Prompt behavior
- Domain-specific chatbot design
- BYOK workflows
- Recommendation uncertainty
- Error handling
- Bilingual interaction

## Main Evidence

- CourtFit
- Chatbot testing
- API integration
- Provider handling
- User-interface behavior

## Lessons Learned

- Connecting an API is only one part of building an AI application.
- A domain-specific system requires constraints and testing.
- AI output can be incorrect or outdated.
- Recommendation systems should communicate uncertainty.
- API-key workflows create privacy and usability responsibilities.
- Multi-provider support increases complexity.

## Areas for Deeper Study

- Structured outputs
- Retrieval-augmented generation
- Evaluation
- Prompt testing
- Guardrails
- Model comparison
- Cost and latency
- Privacy
- AI security
- Local inference
- Edge AI
- TinyML

# Research Preparation

## Current Status

Nattapong is currently searching for a suitable topic for Senior Graduation Projects 1 and 2.

No final topic has been selected.

## Current Broad Direction

The main area being explored is AI for embedded or resource-constrained devices.

Possible directions include:

- Edge AI
- TinyML
- Embedded AI
- AI inference on microcontrollers
- Resource optimization
- Wireless and AI systems
- Sensor-based intelligent devices
- C++ for embedded AI
- System-level optimization

## Current Activities

- Reading research papers
- Reviewing laboratory work
- Comparing existing approaches
- Identifying undergraduate-scale problems
- Evaluating hardware availability
- Considering scope and time
- Looking for measurable evaluation methods

## Learning Goals

- Understand what has already been done
- Identify realistic research gaps
- Distinguish research contribution from implementation
- Define measurable success
- Select appropriate hardware
- Balance AI accuracy with resource constraints
- Keep the project achievable within Projects 1 and 2

## Open Questions

- What real problem should the project solve?
- Which hardware is available?
- What model size is realistic?
- Should the focus be accuracy, latency, energy, memory, wireless communication, or system design?
- What baseline should be used?
- What can be implemented by one undergraduate student?
- What evidence would make the result credible?
- How much model training is necessary?
- How much of the contribution should be systems engineering?

# Learning Approach

## General Pattern

Nattapong prefers a practical learning style.

A rough personal preference is:

> 20% reading and conceptual preparation, followed by 80% implementation, experimentation, debugging, and revision.

This is a learning preference, not a measured productivity formula.

## Characteristics

- Learn fundamentals before relying on abstraction
- Build practical examples
- Debug real problems
- Compare theory with implementation
- Revisit concepts after project experience
- Use documentation, AI assistance, and external references
- Verify results through testing
- Preserve important lessons

## Working Conditions

Nattapong values:

- Flow state
- Clear immediate goals
- A prepared development environment
- Minimal unnecessary interruption
- Time for deep investigation
- Practical feedback from working systems

# Learning Evidence Priorities

The strongest current learning evidence is:

1. Rust Booking API
2. CourtFit
3. Rust web server and thread pool
4. Axum and database exercises
5. Linux and terminal workflow
6. Computer Engineering coursework
7. C++ learning
8. Research preparation

This order is provisional and should change when stronger evidence becomes available.

# Learning Content Maintenance

This document should be updated when:

- A course is completed
- A major concept becomes clearer
- A new project provides evidence
- An earlier understanding is revised
- A technical note is written
- An experiment is completed
- A research direction changes
- New limitations are discovered
- A learning item becomes substantial enough to become a project

Historical progress should not be rewritten to imply that current understanding existed earlier.

# Learning Publication Notes

Before publishing learning content:

- Distinguish coursework from independent work.
- Distinguish guided exercises from original projects.
- State the current level honestly.
- Include evidence where possible.
- Explain what changed in understanding.
- Avoid skill bars and unsupported proficiency percentages.
- Avoid claiming mastery from completing a book or course.
- Do not publish every small exercise.
- Select learning items that reveal meaningful development.
- Preserve uncertainty and areas for continued study.
- Credit tutorials, books, documentation, AI assistance, and external guidance when materially relevant.

# Open Learning Questions

- Which LearnCpp chapters and exercises are complete?
- Which Rust exercises best show progress?
- Which parts of the Rust web server were extended beyond the book?
- What exact thread pool behavior was implemented?
- Which backend mistakes produced the most useful lessons?
- Which Linux configurations are preserved in version control?
- Which coursework assignments are strong enough to publish?
- Which embedded exercises include meaningful evidence?
- Which networking labs connect most strongly to career goals?
- Which cybersecurity labs or exercises should be completed next?
- Which research papers have been read and summarized?
- What timeline best explains Nattapong’s development across these areas?

