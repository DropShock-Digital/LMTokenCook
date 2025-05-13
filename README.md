<div align="center">
  <img src="assets/LMTC_Patch.png" alt="LMTokenCook Logo" width="400" style="margin-bottom:10px;"/>
  <h1>LMTokenCook</h1>
  <h3 align="center" style="font-weight: normal; margin-top: -10px; margin-bottom: 10px;">Cook Your Files into AI-Inferface Ready Servings 🍳</h3>
  <p><strong>A powerful utility for AI users by <a href="https://www.dropshockdigital.com" target="_blank" rel="noopener noreferrer">Steven Seagondollar, DropShock Digital LLC</a></strong></p>
  <br>
  <a href="https://www.dropshockdigital.com" target="_blank" rel="noopener noreferrer">
    <img src="assets/(White) DropShock Digital - Photography Watermark Version 2.png" alt="DropShock Digital - Creators for Creators" width="350" style="margin-top: 5px; margin-bottom: 20px;"/>
  </a>
  <p>
  <br>
    <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"/></a>
    <a href="https://www.python.org/downloads/release/python-380/"><img src="https://img.shields.io/badge/python-3.8+-blue.svg" alt="Python 3.8+"/></a>
    <a href="https://github.com/seagpt/LMTokenCook/releases/latest"><img src="https://img.shields.io/github/v/release/seagpt/LMTokenCook?label=latest%20version&sort=semver&color=blueviolet" alt="Latest Release"/></a>
    <a href="https://github.com/seagpt/LMTokenCook/releases"><img src="https://img.shields.io/github/downloads/seagpt/LMTokenCook/total?label=downloads&color=brightgreen" alt="Total Downloads"/></a>
  </p>
</div>

---

## 🚀 Quick Download Links (v1.0.0 - First Release)

Get the first official version of LMTokenCook directly for your operating system:

*   🪟 **Windows:**
    *   [**LMTokenCook Installer (v1.0.0) (.exe)**](https://github.com/seagpt/LMTokenCook/releases/download/v1.0.0/LMTokenCook_Installer.exe) <!-- Update with actual v1.0.0 EXE link -->
*   🍎 **macOS:**
    *   [**LMTokenCook Universal (v1.0.0) (.dmg.zip)**](https://github.com/seagpt/LMTokenCook/releases/download/v1.0.0/LMTokenCook.dmg.zip) <!-- Update with actual v1.0.0 ZIPPED DMG link -->
        *(The macOS DMG is provided as a ZIP archive to improve download reliability and help prevent potential security blocks by browsers or operating systems on direct DMG downloads from GitHub.)*

<div align="center" style="margin-top:10px; font-size:0.9em;">
  <em>For all versions, including future updates or pre-releases, please visit the <a href="https://github.com/seagpt/LMTokenCook/releases" target="_blank" rel="noopener noreferrer"><strong>Official LMTokenCook Releases Page</strong></a>.</em>
</div>

---

<div align="center">
  <figure style="margin: 25px auto;">
    <img src="assets/Program_Preview.png" alt="LMTokenCook GUI Screenshot on macOS" width="70%" style="max-width: 700px; border: 2px solid #FFEB70; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.15);"/>
    <br>
    <figcaption style="font-size: 0.95em; color: #666; margin-top: 10px;"><em>LMTokenCook's intuitive interface, ready to process your data (macOS version shown, Windows is nearly identical).</em></figcaption>
  </figure>
</div>

---

## 📖 Overview: Unleash Your AI's Full Contextual Power

**LMTokenCook** is an indispensable utility for AI power-users, data scientists, researchers, writers, developers, and anyone working extensively with web interface–based Large Language Models (LLMs) that feature large context windows. This includes popular models like Google's Gemini series, OpenAI's GPT-4 family (including GPT-4o), and Anthropic's Claude models.

Modern LLMs often possess enormous context capabilities, sometimes advertised with context windows of 1 million tokens or more, especially when accessed via their APIs. This allows them to "remember" and process vast amounts of information, leading to more coherent, nuanced, and deeply informed responses. However, a common challenge arises when using the publicly accessible **web interfaces** for these models: these interfaces frequently impose much stricter *per-prompt input limits* (e.g., typically ranging from ~32,000 to ~128,000 tokens, and sometimes even less for free tiers or certain model versions). This discrepancy creates what can be called "The Context Gap" – the promise of a massive context window versus the reality of a much smaller single-prompt input capacity. How can you effectively provide the *full context* of a large codebase, an entire book, a collection of extensive research papers, or lengthy meeting transcripts to the LLM if you cannot paste all of that information in one go?

**LMTokenCook is your sophisticated, practical solution to this problem.** It elegantly bridges this context gap, especially for users who rely on web interfaces rather than direct, programmatic API access (which often has higher token limits but may involve costs or require coding skills). LMTokenCook systematically processes your local file collections (containing text, code, or document data) and transforms them into LLM-ready input through a clear, multi-step process:

1.  **🔎 Intelligent Scanning & Consolidation:** LMTokenCook meticulously traverses your selected directory (or individual files). It intelligently identifies relevant text-based content from a wide array of supported file formats (including common plain text files like `.txt` and `.md`; code files like `.py`, `.js`, `.java`, `.c`, `.cpp`, `.html`, `.css`, `.json`, `.xml`; and document formats like `.docx`, `.pdf` [from text layer only, no OCR], and `.ipynb` Jupyter Notebooks, among many others). Importantly, it is designed to safely skip binary files, common archives (like `.zip` or `.tar.gz`), media files (images, audio, video which are not text-based), symbolic links, and common exclusion folders that are usually not relevant for LLM context (e.g., `.git` repositories, `.venv` virtual environments, `node_modules` folders, `__pycache__` directories). This ensures that only relevant textual data is processed, saving time and tokens.
2.  **📚 Structured & Enhanced Output for LLM Comprehension:** All the extracted text content from your files is compiled into a single, meticulously structured master data stream. This stream ingeniously begins with a **complete file hierarchy map** of your input source. This map acts like an "index" or "table of contents" for your data, providing the LLM with a clear overview of the structure and origin of the information it's about to receive. Following this map, the actual content of each processed file is then clearly delineated with its full path and an estimated token count for that specific file. This clear demarcation helps the LLM to differentiate between information from different files and to better understand the source and scope of each piece of context.
3.  **🔪 Precision "Serving" Division – The Core Functionality:** This is where LMTokenCook truly shines and provides its main value. If the total token count of your consolidated content exceeds a "Serving Size (Max Tokens)" limit that *you* specify, LMTokenCook automatically and intelligently divides the entire content into multiple, manageable **"servings."** These servings are saved as sequentially named plain text files (e.g., `serving_001_of_015.txt`, `serving_002_of_015.txt`, etc., with zero-padded numbering for correct sorting). Each serving is precisely sized according to your specified token limit, making it perfectly tailored for sequential copying and pasting into your target AI's prompt window without exceeding its input restrictions. Furthermore, instructional comments are embedded within each serving file to guide both you (the user) and the LLM through the multi-part input process.
4.  **💡 Enables True Context Augmented Generation (CAG) through Web Interfaces:** By feeding these generated servings one after another into the LLM's chat interface – following the simple instructional comments provided within each serving file – you can effectively saturate the LLM's available context window, even if it requires multiple prompts to input all the data. This methodical approach ensures that the AI model operates with the *complete* background information necessary for generating high-quality, contextually aware, and deeply informed responses, analyses, or creative outputs.

LMTokenCook empowers you to leverage the full cognitive power of your AI subscriptions, even when faced with restrictive web interface input limits. It transforms a potentially frustrating limitation into a series of manageable, strategic steps. The output is always clean, token-efficient plain text, designed for maximum compatibility with various LLM interfaces and for optimal recall and understanding by the AI models. **Stop underutilizing your AI's large context capabilities – let LMTokenCook prepare the contextual feast!**

---

## ✨ Key Features: Your AI Preparation Kitchen

LMTokenCook is packed with features meticulously designed to make your interaction with Large Language Models more productive, powerful, and insightful, streamlining the often tedious process of preparing large amounts of text data for AI consumption:

*   **🖥️ Cross-Platform & Intuitive Graphical User Interface (GUI):**
    A sleek, modern, and user-friendly graphical interface built with the **CustomTkinter** library. It features an aesthetically pleasing dark theme with vibrant yellow accents, ensuring a comfortable and visually clear experience, even during extended use. LMTokenCook provides native application packages for **macOS (Universal Binary supporting Apple Silicon & Intel)** and **Windows (Installer)**, ensuring a seamless experience on your operating system of choice.

*   **📁 Flexible Input Methods – Easy Data Ingestion:**
    Effortlessly select your input source. You can choose entire directories for recursive processing or select one or more individual files using a standard system file browser. For added convenience and speed, LMTokenCook also supports **drag-and-drop** functionality, allowing you to quickly add your target folder or file(s) directly onto the designated area in the GUI.

*   **💾 Organized Timestamped Output – Keep Your Runs Separate and Clear:**
    For every processing job you run, LMTokenCook automatically creates a unique, **timestamped subfolder** within your chosen main output directory (e.g., `Output_YYYY-MM-DD_HH-MM-SS`). This meticulous organization keeps the results from each run clearly separated, tidy, and easy to locate later. It prevents accidental overwriting of previous results and facilitates better version control or comparison if you process the same data with different settings.

*   **🧐 Intelligent & Comprehensive File Scanning – Focus on What Matters:**
    LMTokenCook recursively scans your specified input directories, intelligently identifying and processing files based on an extensive, and extensible, list of text, code, and document extensions. You can see the full, up-to-date list of supported extensions by looking at the `lmtokencook/scanner.py` file in the source code, but it includes a vast range such as `.txt`, `.md` (Markdown), code files like `.py` (Python), `.js` (JavaScript), `.java`, `.c`, `.cpp`, `.cs` (C#), `.go`, `.rb` (Ruby), `.php`, `.swift`, `.kt` (Kotlin), web files like `.html`, `.css`, data files like `.json`, `.xml`, `.yaml`, scripting files like `.sh`, `.bat`, and many more.
    Crucially, it is also designed to **safely skip** common file types that are typically not relevant for LLM textual context or cannot be processed as text. This includes:
    *   Binary files (e.g., executables, compiled libraries).
    *   Common archives (like `.zip`, `.tar.gz`, `.rar`).
    *   Media files (images like `.jpg`, `.png`; audio like `.mp3`, `.wav`; video like `.mp4`, `.mov`).
    *   Symbolic links (to avoid potential infinite loops or unintended processing).
    *   Commonly excluded folders that usually contain non-source content or large numbers of irrelevant files (e.g., `.git` version control repositories, `.venv` Python virtual environments, `node_modules` JavaScript package folders, `__pycache__` Python bytecode folders).
    This intelligent filtering ensures that only relevant textual data is processed, saving time, reducing unnecessary token consumption, and preventing errors.

*   **📝 Robust Text Extraction from Diverse Formats – Unlock Your Data:**
    LMTokenCook leverages dedicated, robust Python libraries to ensure reliable content extraction from a variety of common file formats beyond plain text:
    *   **Plain Text & Numerous Code Formats:** As listed above, a wide array of plain text and source code file types are handled natively.
    *   **Microsoft Word (`.docx`):** Utilizes the `python-docx` library for best-effort text extraction from modern Microsoft Word documents (files with the `.docx` extension).
    *   **PDF (`.pdf`):** Employs the `pypdf` library for best-effort text extraction from PDF files. **Important Note:** This PDF extraction relies on the PDF having a proper, selectable text layer. LMTokenCook does *not* perform Optical Character Recognition (OCR) on image-only PDFs (e.g., scanned documents saved as images within a PDF wrapper). For such files, you would need to use an external OCR tool first to convert them into PDFs with a text layer. (PDF support in LMTokenCook is an area of ongoing refinement and improvement).
    *   **Jupyter Notebooks (`.ipynb`):** Intelligently processes Jupyter Notebook files to extract the textual content from both code cells (the code itself) and markdown cells (the explanatory text, headings, lists, etc.), thereby preserving the valuable textual information contained within these notebooks.

*   **🪙 Accurate Tokenization with OpenAI's `tiktoken` – Relevant for Major Models:**
    For all token counting and serving size calculations, LMTokenCook employs OpenAI's official `tiktoken` library. Specifically, it uses the **`cl100k_base` encoding**. This particular encoding is widely used by many of OpenAI's own leading models, including the GPT-3.5 and GPT-4 families (like GPT-4o). It is also known to be highly relevant and closely aligned with the tokenization methods used by Google's Gemini models and other major LLMs. This ensures that the token counts generated by LMTokenCook are accurate and practical for real-world use, allowing you to size your servings reliably for your target AI model.

*   **🔗 Optimized Concatenation & Smart Formatting for LLM Readability:**
    LMTokenCook efficiently processes and combines the text streams extracted from your multiple input files. It can apply optional formatting choices (like adding line numbers or skipping empty lines – see below) *before* writing the final consolidated output. Crucially, for LLM comprehension, it clearly marks the beginning and end of each individual file's content within the consolidated output stream. This is done using highly visible and distinct delimiters:
    ```text
    === File Start: path/to/your/specific_file.py ===
    [Content of specific_file.py goes here...]
    === File End: path/to/your/specific_file.py (Tokens: XXX) === 
    ```
    This structural formatting helps the LLM to differentiate between content originating from different files and to better understand the source, context, and relative size (in tokens) of each piece of information it processes. The file hierarchy map at the beginning of the master output further aids this.

*   **📜 Optional Master File (`masterfile.t-XXXXX.txt`) – Keep the Whole Context or Just Servings:**
    LMTokenCook gives you the choice to retain the full, concatenated `masterfile.t-XXXXX.txt`. The `XXXXX` in the filename will reflect the *final* estimated total token count of all your processed content after any formatting options (like line numbering) have been applied. This master file contains the initial file hierarchy map followed by all file contents. Alternatively, if you only need the token-based servings (because your total context is very large), you can opt to have LMTokenCook automatically discard this master file after creating the servings. This option can save valuable disk space, especially when dealing with extremely large input datasets.

*   **🔢 Intelligent Token-Based Servings with Embedded Guidance – The Core Functionality:**
    This is the central feature of LMTokenCook for handling large contexts. If the total processed token count of your consolidated content exceeds the "Serving Size (Max Tokens)" limit that you specify in the GUI, the content is automatically and intelligently divided into multiple, sequentially named `serving_XXX_of_YYY.txt` files (e.g., `serving_001_of_015.txt`, `serving_002_of_015.txt`, etc., with zero-padded numbering for correct sorting). Each of these serving files is designed to be a self-contained unit for pasting into an LLM and intelligently includes:
    *   **Instructional Comments:** Clear, concise comments are embedded at the beginning of each serving file (e.g., `# [LMTokenCook] This is serving X of Y. Please wait for all Y servings to be loaded before asking your main question or giving instructions.`). These comments serve two purposes: they guide you (the user) on how to sequentially input the context into the LLM's interface, and they also inform the LLM itself about the multi-part nature of the context it is receiving, helping it to assemble the full picture.
    *   **File Hierarchy Map (in First Serving):** A portion of the overall file hierarchy map (or the complete map if it's small enough) is typically included at the start of the *first* serving (`serving_001_of_YYY.txt`). This gives the LLM an early overview of the entire dataset structure.
    *   **Careful Splitting Logic:** LMTokenCook attempts to split the content between servings at logical points (like newlines) to avoid breaking words or critical syntax elements (like code structures or markdown formatting) in the middle where possible, although perfect splitting at the token level across all content types is a complex challenge.

*   **#️⃣ Optional Line Numbering – For Precise Referencing:**
    LMTokenCook provides an option to prepend a line number to every line of the output content (in both the master file and all serving files). The format used is `NNNN ` (a 4-digit, zero-padded line number followed by a single space). This feature is incredibly useful when you need to precisely cite or refer to specific parts of the source material in your subsequent prompts to the LLM. For example, when working with code repositories, you can instruct the LLM to "Refer to lines 0123-0145 in the file `src/utils/parser.py` for the relevant parsing logic..." or when analyzing legal documents, "Consider the clause found at lines 0042-0050 of `contract_agreement.txt`."

*   **🧹 Optional Skip Empty Lines – For Denser, More Token-Efficient Content:**
    You can choose to have LMTokenCook automatically remove completely blank lines (i.e., lines that contain only whitespace characters, or no characters at all) from the output content. This can help to create a denser, more compact representation of your text, which can be particularly useful for making your input slightly more token-efficient, especially when dealing with files that have inconsistent or excessive empty line formatting.

*   **📊 Detailed Manifest File (`manifest.json`) – Full Transparency and Traceability:**
    For every processing run, LMTokenCook generates a comprehensive JSON (JavaScript Object Notation) report file named `manifest.json`. This manifest is saved in the unique timestamped output folder for that run and provides full transparency, traceability, and valuable diagnostic information about the entire processing job. The `manifest.json` typically includes:
    *   **Run Metadata:** Contains a summary of the run, including the input source path(s), the output path for that specific run, the timestamp of when the run was executed, a record of all the processing options that were selected by the user in the GUI (like serving size, line numbering, etc.), final counts of files (total scanned, successfully processed, skipped due to various reasons like being binary or having an unsupported extension, and files that failed extraction), the total estimated token count for all processed content, and detailed information about the servings created (if any), such as the number of servings and the target tokens per serving.
    *   **Directory Structure (Input Source Map):** Provides a nested dictionary (or similar JSON structure) that mirrors the directory structure of your scanned input source. For each file and folder encountered, it shows its processing status (e.g., `PROCESSED`, `SKIPPED_BINARY`, `SKIPPED_MEDIA`, `SKIPPED_UNSUPPORTED_EXTENSION`, `ERROR_READING_FILE`, etc.) and often a brief reason if it was skipped or failed.
    *   **Processed File Details (Summary List):** An ordered list containing detailed information for each file that was successfully processed and included in the output. For each processed file, this list typically includes: its unique ID for the run, its relative path (from the input source root), its absolute path on your system, its original character count, its processed character count (which might differ if options like skipping empty lines were used), its *final* estimated token count (after all processing and formatting), the method used for text extraction (e.g., "text/plain", "docx_extraction", "pdf_extraction"), the character encoding that was detected or used for reading the file (e.g., "utf-8"), and a final processing status (e.g., "PROCESSED_OK").
    *   **Error Log Summary (If any files failed):** A list of any files that were encountered but could not be processed successfully, along with the error message or reason for the failure (e.g., "Failed to extract text: Document is corrupted," "File is password-protected," "Unsupported encoding").

*   **⏳ Responsive User Interface (Thanks to Background Threading):**
    LMTokenCook utilizes background threading techniques (using Python's `threading` and `queue.Queue` modules) to ensure that its Graphical User Interface remains interactive and responsive, even when it is performing potentially long-running tasks such as scanning large directories with many files, extracting text from complex document formats, tokenizing huge amounts of content, or writing large output files to disk. This prevents the GUI from freezing or appearing to hang. It provides real-time progress updates to the user via a visual progress bar and status messages displayed in the application's log area. A "Cancel" button is also available, allowing users to gracefully halt ongoing processing operations if needed.

*   **⚙️ Configuration Persistence (`config.json`) – Remembers Your Preferences:**
    LMTokenCook aims to make your workflow more convenient by remembering some of your most frequently used settings between sessions. It saves your last-used output folder path, your last-entered serving size (max tokens), and your last choices for the processing options (Keep Master File, Add Line Numbers, Skip Empty Lines) in a configuration file named `config.json`. This file is stored in the standard user application configuration directory on your operating system (LMTokenCook uses the `appdirs` Python library to determine the correct platform-specific location for this file). This persistence means that when you next launch LMTokenCook, these fields will often be pre-filled with your previous settings, saving you setup time.

---

## 💡 Understanding the AI Playground: Tokens, Context Windows, Prompt Limits & Major Models

To get the absolute most value out of LMTokenCook and the Large Language Models (LLMs) you feed its output to, it's very helpful to have a solid understanding of how these AI systems "think" about and process text. Here’s a quick primer on some key concepts:

*   **🤖 What are Large Language Models (LLMs)?**
    Think of prominent AI models like **Google's Gemini family** (which includes versions like 1.0 Pro, 1.5 Flash, 1.5 Pro, and potentially upcoming more advanced versions), **OpenAI's ChatGPT series** (which encompasses models like GPT-3.5, GPT-4, GPT-4 Turbo, and the latest GPT-4o), **Anthropic's Claude family** (including Claude 2, and the Claude 3 series with Haiku, Sonnet, and Opus models), **Mistral AI's models** (such as Mistral 7B, the mixture-of-experts Mixtral 8x7B, and the larger Mistral Large), and **Meta's Llama series** (like Llama 2 and Llama 3). These are all examples of highly advanced pattern-matching and text-generation engines. They have been trained on colossal datasets containing text and code from the internet and other sources. Through this training, they learn the intricate structure, nuances, grammar, semantics, and vast amounts of information embedded within human language and various programming languages. This learned knowledge allows them to perform a wide array of complex tasks, including text summarization, translation between languages, writing various kinds of creative content, generating computer code, engaging in coherent conversations, answering questions, and performing complex reasoning based on provided context.

*   **🪙 What are "Tokens" in the Context of LLMs?**
    LLMs don't process text strictly character-by-character or even always word-by-word in the way humans do. Instead, they first break down the input text (your prompt and any context you provide) into smaller units called **tokens**. A token is the fundamental unit of text that the model "sees" and processes. A single token could represent:
    *   A whole common word (e.g., `"language"`, `"model"`, `"the"`).
    *   A common part of a longer word (e.g., the word "tokenization" might be broken into tokens like `"token"`, `"iza"`, and `"tion"`).
    *   A single character (e.g., the letter `"a"` if it stands alone or is part of a rare word).
    *   Punctuation marks (e.g., `.`, `?`, `!`, `,`).
    *   Even whitespace characters (like spaces or newlines) can sometimes be tokens or influence tokenization.
    This process of converting raw text into a sequence of tokens is called **tokenization**, and it uses specific algorithms (like Byte Pair Encoding (BPE), WordPiece, or SentencePiece, depending on the model).
    **The Key Takeaway for Users:** Almost all limits imposed by LLM providers (such as context window sizes, prompt input length restrictions) and the costs associated with using their APIs are based on *token counts*, not on raw character counts or word counts. Also, different languages tokenize with varying efficiency; for example, English text generally results in fewer tokens per character or word compared to some other languages. LMTokenCook utilizes OpenAI's `tiktoken` library with the `cl100k_base` encoding for its token counting. This particular encoding is used by many of OpenAI's current high-performance models (like GPT-4) and is also known to be highly relevant and closely aligned with the tokenization methods used by other major models like Google's Gemini series. This makes LMTokenCook's serving size calculations very accurate and practical for real-world use with these leading AI systems.

*   **🧠 What is a "Context Window" (also called Context Length)?**
    The context window of an LLM is essentially its **total working memory** for a given interaction or task, and it's measured in tokens. It represents the maximum span of text that the model can "see" and refer to *simultaneously* when it is generating its next piece of text (its response). This "seen" text includes:
    *   Your current input prompt (your question or instruction).
    *   Any preceding turns in the conversation if you are in a chat interface (the history of your messages and the AI's previous responses that you provide as context).
    *   Sometimes, for certain models or tasks, the model's own generated output for the current turn also counts towards this context window limit.
    A larger context window generally allows an LLM to maintain greater coherence over longer conversations, to perform deeper analysis of large documents or codebases, and to engage in more nuanced reasoning that draws upon a wider range of information. However, processing larger contexts demands significantly more computational resources (memory and processing power) from the AI provider, which can potentially lead to increased costs (for API users) and higher latency (slower response times). Leading AI models today offer context windows that can range from around 32,000 tokens (32k) up to an impressive 1 million (1M) or even 2 million (2M) tokens, although the full extent of these very large context windows is often more readily accessible and usable via direct API calls rather than through standard public web interfaces.

*   **✍️ What is a "Prompt Limit" or "Input Limit" (Especially in Web Interfaces)?**
    This is often the more immediate and practical constraint that users encounter, particularly when interacting with LLMs through their **web-based chat interfaces** (like the ChatGPT website, Gemini web app, Claude.ai, etc.). The prompt/input limit is the **maximum number of tokens that you can actually submit** to the LLM in a *single* prompt, message, or input field within that web interface.
    This limit is frequently **much smaller** than the model's total theoretical context window. For example, while a model like Gemini 1.5 Pro might boast a 1 million token total context window capability, its standard web interface might limit a single *direct text input* to somewhere around 60,000 to 128,000 tokens (though file uploads, where supported, can sometimes allow users to get more data into the context, these uploaded files still count towards the overall context window limit).
    These per-prompt input limits exist for various reasons, including:
    *   Performance optimization of the web interface.
    *   Cost control on the part of the AI service provider (processing huge single prompts can be resource-intensive).
    *   User interface usability (very large text inputs can be hard to manage in a browser window).
    **LMTokenCook's "Serving Size (Max Tokens)" setting in its GUI should be carefully chosen based on this practical Prompt/Input Limit of the specific web interface you are targeting.** It's crucial to set this serving size to be somewhat *less* than the interface's absolute maximum input limit to leave sufficient headroom (i.e., spare tokens) for your own instructions or questions that you will add with each serving, and also for the LLM's anticipated response length (as the response also consumes tokens from the overall context window). LMTokenCook helps you overcome this single-prompt input limit by strategically segmenting your large corpus of text into these manageable, appropriately sized servings.

*   **📊 Major LLM Families & Approximate Web Interface Input Limits (Illustrative Information - Valid as of Q2 2025 but Subject to Rapid Change):**
    > **Important Disclaimer:** The world of Large Language Models is evolving incredibly rapidly! Model capabilities, context window sizes, and especially the input limits of their web interfaces can change frequently and without much notice. The information in the table below is intended for general guidance and illustration only, based on typical observations around Q2 2025. **Always verify the current limits with the specific AI platform's official documentation and consider your individual subscription tier, as limits can vary significantly.** These estimates focus on direct text input in the primary web chat interfaces of these services. File upload mechanisms, where available, may have different effective input limits but will still contribute to the model's overall context window usage.

    | Model Family (AI Provider)        | Specific Model Examples             | Max Context Window (Underlying Model Capability) | Typical *Web Interface* Prompt/Input Limit (for Direct Text Pasting) | Typical Max Output Token Limit (from Web UI) | Common Web Interface Access Points                                           |
    | :----------------------------- | :------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ | :-------------------------------------------------------------------- |
    | **OpenAI GPT Series**        | GPT-4, GPT-4 Turbo, GPT-4o           | Typically 128,000 tokens (some newer or specialized variants might offer more via API)      | **Highly Dependent on Subscription Tier:** <br/> *Free Tier* (often uses GPT-3.5 or a rate-limited/feature-limited version of GPT-4o): Input might be around ~8,000 to ~16,000 tokens. <br/> *Paid Tiers* (like ChatGPT Plus or Team, using models like GPT-4, GPT-4 Turbo, or GPT-4o): Often allow for practical inputs in the range of ~32,000 to ~64,000 tokens per prompt, though the model itself can "see" up to its full 128k context including conversation history. File uploads (like PDFs, documents) can help leverage more of the context window indirectly. | Usually around ~4,000 to ~8,000 tokens per response (can sometimes be higher for specific tasks or models). | `chat.openai.com`                                                       |
    | **Google Gemini Series**     | Gemini 1.0 Pro, Gemini 1.5 Flash, Gemini 1.5 Pro   | 32,000 tokens (1.0 Pro) up to 1 Million+ tokens (1.5 Pro, potentially 2M via API for some)          | **Varies by Interface & Tier:** <br/> *Standard `gemini.google.com`* (often using 1.0 Pro or 1.5 Flash for free users): Input might be in the ~30,000 to ~60,000 token range for direct text. <br/> *Gemini Advanced* (paid tier, often using 1.5 Pro): Can allow for larger direct text inputs, perhaps ~60,000 to ~128,000+ tokens. File uploads (e.g., PDFs, videos, audio for 1.5 Pro) are a key way to utilize much more of the 1M+ token context window. <br/> *Google AI Studio:* Often allows for larger inputs that are closer to the API limits for models like 1.5 Pro, especially when configuring specific tasks, but its interface differs from the standard web chat. | Can range from ~8,000 up to ~32,000 tokens per response, depending on the model and interface.   | `gemini.google.com`, `aistudio.google.com`, integrations within Google Workspace (Docs, Sheets, etc.) |
    | **Anthropic Claude Series**  | Claude 3 Haiku, Claude 3 Sonnet, Claude 3 Opus         | All Claude 3 models have a 200,000+ token context window.                        | **Dependent on Subscription Tier:** <br/> *Free Tier (via claude.ai):* Direct text input is significantly limited, perhaps around ~10,000 to ~20,000 tokens. <br/> *Pro Tier (paid subscription):* Allows for much higher direct text pasting, potentially up to around ~150,000 to ~180,000 tokens. File uploads (especially PDFs, text files, code files) are very effective for utilizing the full 200k context window. | Typically around ~4,000 to ~8,000 tokens per response (can be higher, especially for Opus). | `claude.ai`                                                             |
    | **Mistral AI Series**        | Mistral 7B, Mixtral 8x7B, Mistral Large      | Context windows vary, e.g., 32,000 tokens for some, up to 128,000+ for others.                    | **Varies Greatly by the Platform Hosting the Model:** Mistral AI itself doesn't have a single dominant public web UI like the other providers mentioned. The limits for direct text input depend heavily on the third-party platform or service that is hosting or providing access to Mistral models (e.g., Perplexity, Hugging Chat, various API providers with their own interfaces). These limits could range anywhere from ~4,000 tokens up to 32,000+ tokens or more. | Typically around ~4,000 to ~8,000 tokens per response, platform-dependent.             | Primarily accessed via Third-party platforms, partner integrations, or directly via API. |

---

## ❗ Mandatory Reading: Maximize Success, Minimize Surprises – Important Usage Notes

Before you dive into using LMTokenCook extensively, please take a moment to read and internalize these crucial points. Understanding these will help you use the tool effectively, safely, and achieve the best possible results with your LLMs:

*   🎯 **Set Your "Serving Size (Max Tokens)" Wisely – Target the Prompt Limit, Not the Context Window!**
    This is perhaps the most critical setting in LMTokenCook. When you enter a value for "Serving Size (Max Tokens)" in the GUI, you should base this value on the practical **Prompt Input Limit** of the specific Large Language Model (LLM) web interface you are planning to paste the output into (refer to the illustrative table in the "Understanding the AI Playground" section above, or, even better, check the official documentation for your target LLM service and your specific subscription tier).
    *   **Do NOT set this serving size based on the LLM's maximum theoretical *context window* size** (which can be much larger, like 1 million tokens). You are limited by what the web interface will accept in a single paste.
    *   **Crucially, you MUST leave ample headroom in your serving size!** For example, if you know that the web interface for Gemini Advanced typically allows you to paste around ~60,000 tokens in a single prompt, you should set LMTokenCook's "Serving Size (Max Tokens)" to a value somewhat *less* than that, perhaps `55000` or even `50000`. This buffer or headroom is absolutely essential for several reasons:
        1.  **Your Own Instructional Prompts:** You will need to add your own text with each serving when you paste it into the LLM (e.g., "Here is part X of Y from the provided context. Please acknowledge receipt and await further parts before processing."). This instructional text consumes tokens.
        2.  **The LLM's Response:** The LLM also needs "space" within its operational context window to generate its own response to your inputs or questions. If you fill the entire prompt input limit with just your data, there might be very little room left for the AI to actually reply.
        3.  **Potential Minor Discrepancies in Tokenization:** While LMTokenCook uses OpenAI's `tiktoken` (specifically `cl100k_base`), which is highly accurate for many models, the *exact* way an LLM service provider tokenizes text internally might have very slight variations. Leaving some headroom helps accommodate these minor differences.
    *   If you set your serving size too large (too close to the interface's hard limit), your pasted content might get truncated by the web interface, or the LLM might not have enough remaining context space to process your actual query effectively after all servings are loaded. It's always better to err on the side of slightly smaller servings if unsure.

*   📄 **Quality of Text Extraction is "Best-Effort" for Complex Formats (PDF, DOCX):**
    LMTokenCook uses well-regarded Python libraries (`pypdf` for PDFs, `python-docx` for DOCX) to extract text from these document formats. However, the process is inherently "best-effort" and its success can depend heavily on the structure and quality of the original document:
    *   **For PDF Files:** Text extraction from PDFs relies on the PDF having a proper, selectable **text layer**. If your PDF is essentially an image (e.g., a scanned document that was saved as a PDF without undergoing Optical Character Recognition - OCR), then LMTokenCook will likely yield little to no text because there is no actual text data to extract, only pixel data. Similarly, PDFs with very complex layouts, multi-column text, heavily stylized fonts, embedded (non-text) objects, or non-standard encoding might not extract perfectly or completely.
    *   **For DOCX Files (Microsoft Word):** While `python-docx` is good for modern `.docx` files, extraction can sometimes be affected by complex document formatting, embedded objects (like charts or images with text wrapping that isn't part of the main text flow), intricate table structures, or if the file is corrupted or password-protected. Older `.doc` formats (from pre-2007 Word) are generally not supported by this library.
    *   **Always Review the `manifest.json` File:** After each processing run, LMTokenCook generates a `manifest.json` file in the output folder. This file contains details about which files were processed successfully and which ones encountered errors or were skipped. Check this manifest for any error messages or warnings related to file processing, especially if you suspect some documents did not yield the expected amount of text. For absolutely critical documents, a quick visual scan of the corresponding output `.txt` files (or servings) is also advisable to confirm the extraction quality.

*   🪙 **Token Estimates are Very Accurate, but Still Estimates:**
    LMTokenCook uses OpenAI's `tiktoken` library with the `cl100k_base` encoding for all its token counting. This is considered highly accurate for many major models (like GPT-4, Gemini, Claude). However, it's important to remember that the *exact* token count that a specific LLM service provider assigns internally to a piece of text can sometimes vary by a very small margin. This can be due to proprietary tokenizer implementations, minor version differences in their tokenization algorithms, or special handling of certain characters or sequences. The "headroom" advice for setting your serving size (see above) helps to mitigate any impact from these tiny potential discrepancies.
    Additionally, while LMTokenCook attempts to split content between servings at logical points (like newlines) to avoid breaking words or critical syntax elements, if it encounters an extremely long, unbreakable line of text (e.g., a minified line of JavaScript code, a very long URL, or a data string with no spaces) that happens to fall right at a potential split point for a serving, the serving containing that line might slightly exceed your specified token limit. This is because LMTokenCook generally prioritizes not breaking such long, single lines mid-token or mid-character where feasible, as doing so could corrupt code or data.

*   🔒 **Privacy & Security – Understand Your Data Flow and Responsibilities:**
    It is crucial to understand how your data is handled when using LMTokenCook and interacting with third-party LLM services:
    *   **LMTokenCook Itself Runs 100% Locally on Your Computer:** The LMTokenCook application, when you run it (either the packaged version or from source), performs all its file scanning, text extraction, tokenization, and output file generation processes **entirely locally on your own computer.** It does not transmit your files or their content over the internet to any external server during its own processing phase. Your data remains on your machine while LMTokenCook is working with it.
    *   **HOWEVER, the ultimate destination of the `.txt` serving files (or the `masterfile.txt`) that LMTokenCook generates is a third-party Large Language Model (LLM) service provider** (e.g., OpenAI for ChatGPT, Google for Gemini, Anthropic for Claude). When you manually copy the content from these `.txt` files and paste it into the web interface of these LLM services, you are then transmitting that data to that third-party provider. At that point, your data becomes subject to *their* data usage policies, their privacy terms, and their security measures.
    *   **CRITICAL PRIVACY ADVICE: Do NOT process any highly sensitive, confidential, classified, or personally identifiable information (PII) with LMTokenCook if you are not completely comfortable with that specific information being handled by the third-party LLM service provider you intend to paste the servings into.** Always carefully review the data usage policies, terms of service, and privacy statements of the LLM service provider you are using *before* you submit any data to them. DropShock Digital LLC and Steven Seagondollar are not responsible for the data handling practices or security of any third-party LLM providers. You are solely responsible for the data you choose to submit to such services.

---

## 💾 Installation: Get Cooking in Minutes!

LMTokenCook is designed for a straightforward setup process on both Windows and macOS. Using the pre-built packaged applications is the recommended method for most users, as it does not require any prior technical knowledge of Python or command-line tools.

### For Most Users: Packaged Applications (Recommended Method)

This method avoids the need for Python installation or manual dependency management. Just download, install, and run!

#### 🪟 Windows Installation (Using the .exe Installer)

LMTokenCook for Windows is provided as an `.exe` installer file, which will guide you through a standard software installation process.

1.  **Download the Installer:**
    *   Navigate to the [Official LMTokenCook Releases Page on GitHub](https://github.com/seagpt/LMTokenCook/releases/latest).
    *   Download the `LMTokenCook_Installer.exe` file for the latest version (or the specific version v1.0.0 if this is the initial launch). Save it to a convenient location on your computer, such as your `Downloads` folder.
2.  **Run the Installer Program:**
    *   Locate the downloaded `LMTokenCook_Installer.exe` file and double-click it to start the installation wizard.
    *   **Windows Defender SmartScreen Prompt (Important - Please Read):** It is common for new applications from independent developers (especially for an initial release like LMTokenCook, if it has not yet been digitally signed with an expensive Extended Validation (EV) certificate that builds widespread reputation with Microsoft) to trigger a "Windows protected your PC" SmartScreen prompt when you try to run the installer. This is a standard Windows security measure designed to protect users from potentially unrecognized software.
        *   When this blue SmartScreen prompt appears, do not immediately click the "Don't run" button. Instead, look for a small text link within the dialog that says "**More info**" and click on it.
        *   After clicking "More info," the dialog will typically expand to show more details about the application, including the application name (which should be "LMTokenCook") and sometimes the publisher (if available from a standard code signing certificate, it might show "Unknown publisher" if not signed or if using a self-signed certificate for development).
        *   You should then see a new button appear, usually labeled "**Run anyway**". Click this "Run anyway" button to allow the LMTokenCook installer to proceed.
    *   Follow the on-screen instructions provided by the LMTokenCook installer wizard. This process typically involves steps like:
        *   Accepting the software license agreement (MIT License for LMTokenCook).
        *   Choosing your preferred installation location on your hard drive (the default location is usually appropriate for most users).
        *   Deciding whether to create Desktop shortcuts or Start Menu entries for easy access to the application after installation.
3.  **Launch LMTokenCook:**
    *   Once the installation process is complete, you can launch LMTokenCook. You can usually do this from your Windows Start Menu (it should be listed under recently installed programs or within its own "LMTokenCook" or "DropShock Digital" folder, depending on how the installer is configured) or by using the Desktop shortcut if one was created during the installation.

#### 🍎 macOS Installation (Using the .dmg.zip Archive)

LMTokenCook for macOS is typically distributed as an Apple Disk Image (`.dmg`) file. To ensure smoother downloads from platforms like GitHub and to help prevent potential security blocks by web browsers or macOS's Gatekeeper feature that can sometimes occur with direct `.dmg` downloads, the `.dmg` file itself is usually packaged within a `.zip` archive.

1.  **Download and Unzip the Archive:**
    *   Go to the [Official LMTokenCook Releases Page on GitHub](https://github.com/seagpt/LMTokenCook/releases/latest).
    *   Download the `LMTokenCook.dmg.zip` file for the latest version (or version v1.0.0 for this initial launch). Save it to your `Downloads` folder or another preferred location.
    *   Once the download is complete, locate the `LMTokenCook.dmg.zip` file and double-click it. Your Mac's built-in Archive Utility (or another unzipping tool you might have, like The Unarchiver) should automatically extract its contents. This will result in a file named `LMTokenCook.dmg` appearing in the same folder.
2.  **Mount the Disk Image & Install the Application:**
    *   Double-click the extracted `LMTokenCook.dmg` file. This action will "mount" the disk image on your system, and a new Finder window should automatically open, displaying the contents of this mounted virtual disk.
    *   Inside this opened Finder window for the mounted disk image, you will typically see the `LMTokenCook.app` icon. Often, to make installation easier for users, there will also be a shortcut (an alias) to your Mac's main `/Applications` folder.
    *   To install LMTokenCook, simply **drag the `LMTokenCook.app` icon** from this window and **drop it directly into your `/Applications` folder**. (Your `/Applications` folder is usually accessible from the Finder sidebar, or you can navigate to it by selecting "Go > Applications" from the Finder menu bar at the top of your screen). This action copies the LMTokenCook application to your Mac's hard drive, which completes the installation process.
    *   After successfully copying the application to your Applications folder, you can "eject" the mounted "LMTokenCook" disk image to remove it from your Desktop and sidebar. You can do this by:
        *   Dragging its icon (which might appear on your Desktop or in the Finder sidebar) to the Trash icon in your Dock (the Trash icon will temporarily change to an Eject icon when you drag the disk image over it).
        *   Alternatively, you can find the mounted volume in the Finder sidebar, Ctrl-click (or right-click) on it, and select "Eject [Volume Name]" (e.g., "Eject LMTokenCook") from the context menu.

3.  **First Launch (Important macOS Security Step – Gatekeeper):**
    macOS includes a security feature called Gatekeeper, which is designed to help protect your Mac from malware by controlling which applications are allowed to run. When you download an application from the internet that isn't from the Mac App Store or from an Apple-notarized developer (which is common for new independent software like LMTokenCook, especially in its initial releases), Gatekeeper may prevent it from opening directly on the first attempt with a standard double-click. You will likely need to perform a one-time override to explicitly allow LMTokenCook to run:
    *   Navigate to your `/Applications` folder in Finder.
    *   Locate the `LMTokenCook.app` that you just copied there.
    *   **Right-click** (or hold the `Control` key on your keyboard and click once) on the `LMTokenCook.app` icon.
    *   A contextual menu will appear. From this menu, select the "**Open**" option. (It's important to use this "Open" option from the context menu for the very first launch, rather than just double-clicking the app icon, as this specific action often signals to Gatekeeper that you are making a conscious decision to open an app it doesn't fully recognize, and it may present you with a more permissive dialog).
    *   A dialog box may then appear with a warning message similar to: *"macOS cannot verify the developer of 'LMTokenCook.app'. Are you sure you want to open it?"* or *"LMTokenCook.app is an app downloaded from the Internet. Are you sure you want to open it?"* or even *"LMTokenCook.app cannot be opened because it is from an unidentified developer."* This type of warning is expected behavior for applications that haven't yet been notarized by Apple (a process that involves submitting the app to Apple for security scanning and receiving an electronic "notary ticket").
    *   In this warning dialog box, you should see an "**Open**" button (alongside a "Cancel" button or perhaps a button to move it to Trash). Click the "**Open**" button. This action tells macOS that you trust this specific application and wish to allow it to run on your Mac.
    *   ***Alternative Method if the "Open" button is missing or the app is still blocked by Gatekeeper:*** In some cases, especially if your Mac's Gatekeeper settings are configured to be very restrictive (e.g., "Allow apps downloaded from: App Store" only, instead of "App Store and identified developers"), the right-click > "Open" method might not directly give you an "Open" button in the warning. If this happens, or if the app is still blocked, you may need to go to your Mac's **System Settings** to grant permission:
        1.  Open **System Settings** (you can do this from the Apple menu in the top-left corner of your screen, or by clicking its icon in your Dock).
        2.  In the System Settings window, navigate to the **Privacy & Security** section (you might need to scroll down the sidebar on the left to find it).
        3.  In the Privacy & Security settings, scroll down the main panel on the right until you find the "Security" subsection (it's usually near the bottom, under headings like "Allow applications downloaded from:").
        4.  You should see a message in this area stating something like: *"LMTokenCook.app was blocked from use because it is not from an identified developer."* There should be a button next to this message labeled "**Open Anyway**". Click this "Open Anyway" button.
        5.  You will likely be prompted to enter your Mac administrator password to confirm this action and allow the application to run.
    *   This security override procedure (whether you use the right-click > "Open" method or the System Settings > "Open Anyway" method) is typically only necessary for the very *first* time you launch LMTokenCook after installing it. For all subsequent launches, you should be able to open the application by simply double-clicking its icon in your Applications folder or from an alias you might have placed in your Dock, just like any other application on your Mac.

### For Developers: Running from Source Code

If you are a developer, wish to contribute to the LMTokenCook project, want to make custom modifications, or simply prefer running applications directly from their source code to have more control or access the latest unreleased changes, follow these instructions:

1.  **Prerequisites (Essential Software to Install First):**
    *   **Python Interpreter:** You must have Python installed on your system. LMTokenCook is developed and tested against **Python 3.8 or newer** (as indicated by the Python badge at the top of this README). While a specific 3.12.x version might be used by the primary developer for their own environment, the project aims for compatibility with Python 3.8 and later versions. You can download the appropriate Python installer for your operating system from the official Python website: [python.org/downloads/](https://www.python.org/downloads/).
        *   Ensure that `python3` (on macOS/Linux) or `python` (on Windows, if correctly configured in your system's PATH during Python installation) and `pip` (Python's package installer for your Python 3.x version) are accessible from your command line.
    *   **Git (Version Control System):** You will need Git installed on your system to clone (download a copy of) the LMTokenCook source code repository from its hosting location on GitHub. If you don't have Git installed, you can download it from the official Git website: [git-scm.com/downloads](https://git-scm.com/downloads).

2.  **Get the LMTokenCook Source Code from GitHub:**
    Open your terminal or command prompt application. Navigate (using the `cd` command) to your preferred directory where you store your development projects. Once there, clone the LMTokenCook repository from GitHub using the following `git clone` command:
    ```bash
    git clone https://github.com/seagpt/LMTokenCook.git
    ```
    This command will download the project's source code into a new folder named `LMTokenCook`. After the cloning is complete, change your current directory into this new project folder:
    ```bash
    cd LMTokenCook
    ```

3.  **Set Up a Python Virtual Environment (Highly Recommended for All Python Projects):**
    It is a strong best practice in Python development to create an isolated Python virtual environment for each project. This keeps dependencies separate and avoids conflicts. From within the root `LMTokenCook` directory in your terminal:
    *   **Create the virtual environment (you can name it `venv_lmtc` or similar):**
        *   **macOS / Linux:**
            ```bash
            python3 -m venv venv_lmtc 
            ```
        *   **Windows (Command Prompt / PowerShell):**
            ```bash
            python -m venv venv_lmtc
            ```
    *   **Activate the virtual environment:**
        *   **macOS / Linux (Bash/Zsh):**
            ```bash
            source venv_lmtc/bin/activate
            ```
        *   **Windows (Command Prompt):**
            ```bash
            venv_lmtc\Scripts\activate.bat
            ```
        *   **Windows (PowerShell):**
            ```bash
            .\venv_lmtc\Scripts\Activate.ps1
            # If PowerShell script execution is blocked, you might first need to run:
            # Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
            ```
    Your terminal prompt should now be prefixed with `(venv_lmtc)` (or your chosen venv name), indicating it's active.

4.  **Install Required Python Dependencies into the Virtual Environment:**
    With your virtual environment active, install all the necessary Python packages listed in the `requirements.txt` file (located in the project root):
    *   **Universal Command (recommended for explicitness):**
        ```bash
        python3 -m pip install -r requirements.txt
        ```
    This command will install libraries such as `customtkinter`, `Pillow`, `tiktoken`, `tkinterdnd2`, `python-docx`, `pypdf`, and `appdirs` into your isolated virtual environment.

5.  **Run the LMTokenCook Application from Source Code:**
    Ensure your virtual environment is still active and you are in the `LMTokenCook` project's root directory. The main entry point script for launching the GUI application is typically named `lmtc_gui.py` (or a similar name like `main_gui.py` or `app_gui.py` – please check your project structure for the exact main GUI script name if it differs).
    ```bash
    python3 lmtc_gui.py 
    ```
    (Replace `lmtc_gui.py` with the actual main GUI script name if it is different in your specific version of the LMTokenCook source code).

---

### Quick Start for Developers (macOS/Linux Example)

For experienced Python developers who want to quickly get the LMTokenCook source code up and running on a macOS or Linux system:

1.  Clone the repository from GitHub and navigate into the project directory:
    ```bash
    git clone https://github.com/seagpt/LMTokenCook.git && cd LMTokenCook
    ```
2.  Create and activate a Python 3.8+ virtual environment (you can choose your preferred venv name):
    ```bash
    python3 -m venv venv_lmtc_dev
    source venv_lmtc_dev/bin/activate
    ```
3.  Install all required Python dependencies from the `requirements.txt` file:
    ```bash
    python3 -m pip install -r requirements.txt
    ```
4.  (Optional) Review or set up your `config.json` in the user application data directory if you want to test with persistent settings (see "Configuration" section for typical paths).
5.  Run the GUI application (assuming `lmtc_gui.py` is the main script):
    ```bash
    python3 lmtc_gui.py
    ```

---

## 📖 Usage Guide: From Raw Files to AI-Ready Servings

Using LMTokenCook is designed to be a straightforward process, guiding you from selecting your input files to generating AI-ready text outputs.

1.  **Launch LMTokenCook:**
    Open the LMTokenCook application using the method appropriate for your installation (e.g., from your Applications folder on macOS, Start Menu or Desktop shortcut on Windows, or by running `python3 lmtc_gui.py` from the source code if you set it up that way).

2.  **Select Your Input Source (Files or Folder):**
    LMTokenCook needs to know which files or folders you want to process. You have several ways to do this:
    *   **Browse for a Folder:** Click the "**Browse Folder...**" button. A system file dialog will open, allowing you to navigate to and select an entire directory. LMTokenCook will then recursively scan this directory and its subdirectories for processable files.
    *   **Browse for File(s):** Click the "**Browse File(s)...**" button. This will open a system file dialog where you can select one or more individual files from various locations.
    *   **Drag and Drop:** For quick and easy input, you can **drag and drop** your target folder or one or more files directly from your computer's file explorer (Finder on macOS, File Explorer on Windows) onto the designated input area within the LMTokenCook GUI.

3.  **Select Your Output Parent Directory:**
    Next, you need to tell LMTokenCook where to save its results.
    *   Click the "**Browse...**" button located next to the "Output Parent Directory" label.
    *   A system file dialog will appear. Use this to choose a main (parent) location on your computer where LMTokenCook will create its unique, timestamped subfolder for this specific processing run's results. For example, you might choose your `Documents` folder, a `Projects` folder, or a dedicated `LMTokenCook_Outputs` folder.

4.  **Set Your "Serving Size (Max Tokens)" – This is a Key Setting:**
    In the input field labeled "Serving Size (Max Tokens)", enter the maximum number of tokens you want each individual `serving_XXX_of_YYY.txt` file to contain.
    *   **Crucial Guidance:** As explained in detail in the "Understanding the AI Playground" and "Mandatory Reading" sections above, you should base this value on the practical **Prompt Input Limit** of the specific Large Language Model (LLM) web interface you are planning to paste the output into. **Remember to leave ample headroom** (e.g., if the interface limit is ~60,000 tokens, set this to perhaps `55000` or `50000`) to account for your own instructional text and the LLM's response.
    *   If you enter `0` (zero) or leave this field blank, LMTokenCook will *not* create separate serving files. In this case, it will only produce the single `masterfile.t-XXXXX.txt` (if the "Keep Master File" option is checked). This is suitable if your total context is small enough to fit within a single LLM prompt.

5.  **Choose Your Processing Options (Checkboxes):**
    LMTokenCook offers several options to customize the output:
    *   ✅ **Keep Master File:** Check this box if you want LMTokenCook to save the `masterfile.t-XXXXX.txt`, which contains all your concatenated content in one large file. Uncheck this box if you only need the smaller "serving" files and want to save disk space (especially if your input is very large).
    *   ✅ **Add Line Numbers:** Check this box if you want LMTokenCook to prepend a 4-digit, zero-padded line number (e.g., `0001 `) to each line of the output text. This is very useful for precisely referencing parts of your source material when prompting the LLM.
    *   ✅ **Skip Empty Lines:** Check this box if you want LMTokenCook to remove completely blank lines (lines containing only whitespace or no characters at all) from the output. This can help create denser, more token-efficient content.

6.  **Start Processing – Let LMTokenCook Work Its Magic:**
    *   Once you have selected your input, output, serving size, and chosen your processing options, click the prominent **"Start Processing"** button.

7.  **Monitor the Process:**
    LMTokenCook will begin working, and you can monitor its progress:
    *   Watch the **Status Log** area within the GUI. This will display real-time updates on what LMTokenCook is currently doing (e.g., "Scanning files...", "Extracting text from document.pdf...", "Tokenizing content...", "Writing serving 5 of 12...", etc.).
    *   The **Progress Bar** will provide a visual indication of the overall progress of the current job.
    *   If you need to stop the process for any reason, the "**Cancel**" button should be available to gracefully halt the ongoing operations.

8.  **Job Completion & Accessing Your Results:**
    *   Wait for the status message in the GUI to indicate that the processing is complete (e.g., it might say "[SUCCESS] Processing complete! Output saved to: [path_to_your_output_folder]").
    *   Once complete, click the "**Open Output Folder**" button. This convenient button will open your computer's file explorer (Finder on macOS, File Explorer on Windows) directly to the unique, timestamped output subfolder that LMTokenCook created for this specific run.
    *   Inside this output subfolder, you will typically find:
        *   The `manifest.json` file (which contains a detailed report of the processing run).
        *   The `masterfile.t-XXXXX.txt` (if you had checked the "Keep Master File" option).
        *   A series of serving files (e.g., `serving_001_of_012.txt`, `serving_002_of_012.txt`, etc.), if your total content exceeded your specified "Serving Size (Max Tokens)" and serving generation was active.

9.  **Feed Your "Cooked" Content to Your LLM (The Context Augmented Generation Workflow):**
    This is the final and most important step to leverage LMTokenCook's output effectively with your chosen LLM through its web interface.
    *   **If you are using the single `masterfile.t-XXXXX.txt`** (this is suitable if your total context is small enough to fit within one prompt for your target LLM):
        1.  Open the `masterfile.t-XXXXX.txt` file in a text editor.
        2.  Select and copy its entire content.
        3.  Paste this content directly into your LLM's prompt input window.
        4.  Immediately after pasting the content, type your question, instruction, or task for the LLM. Then send the prompt.
    *   **If you are using the multiple `serving_XXX_of_YYY.txt` files** (this is the method for very large contexts that exceed single prompt limits):
        1.  **Prompt 1 (Submitting the First Serving):**
            *   Locate and open the first serving file, e.g., `serving_001_of_015.txt`.
            *   Select and copy its entire content (including the instructional comments LMTokenCook added at the beginning).
            *   Paste this content into your LLM's prompt input window. You might want to add a brief introductory message before or after the pasted content, for example:
                `"I am about to provide you with a large amount of context that will be split into 15 parts. This is part 1 of 15. Please acknowledge that you have received this part and are ready for the next one. Please do not summarize or analyze the content until all parts have been provided and I give you the final instruction."`
            *   Send this first prompt to the LLM. Wait for the LLM to respond with an acknowledgement (e.g., "Okay, I have received part 1. I'm ready for part 2.").
        2.  **Prompts 2 through to YYY-1 (Submitting Intermediate Servings):**
            *   Open the next serving file in sequence (e.g., `serving_002_of_015.txt`).
            *   Select and copy its entire content.
            *   Paste this into the LLM's prompt window. You might add a brief message like:
                `"Here is part 2 of 15. Please acknowledge."`
            *   Send the prompt. Wait for the LLM's confirmation.
            *   Repeat this process for all the intermediate serving files, one by one, ensuring you get an acknowledgement from the LLM after each part before sending the next. This helps ensure the LLM is correctly receiving and concatenating the context in its memory.
        3.  **Prompt YYY (Submitting the Final Serving & Your Actual Question/Task):**
            *   Open the very last serving file (e.g., `serving_015_of_015.txt`).
            *   Select and copy its entire content.
            *   Paste this into the LLM's prompt window. Now, this is where you add your actual, detailed question, instruction, or task for the LLM *after* this final piece of context. For example:
                `"Here is the final part, 15 of 15. [Now paste the full content of serving_015_of_015.txt here] Now that you have received all 15 parts of the context, please [Your actual, detailed question or task goes here. For example: 'summarize the main arguments presented in all the provided research papers, focusing on methodology and conclusions', or 'refactor the entire Python codebase provided to improve its performance and readability, paying close attention to the classes defined in the src/core/ directory', or 'write a short story based on all the character backstories and plot outlines I have provided']." `
            *   Send this final prompt. The LLM should now process your request using the full, extensive context that you have painstakingly supplied across multiple conversational turns.

    <div align="center" style="margin-top: 20px; margin-bottom: 20px;">
      <figure>
        <img src="assets/working-example.png" alt="Working Example: Gemini receiving multiple LMTokenCook servings in sequence" width="60%" style="max-width: 600px; border: 1px solid #FFEB70; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
        <br>
        <figcaption style="font-size: 0.9em; color: #666; margin-top: 8px;"><em>Illustrative example: Sequentially pasting LMTokenCook serving files into Google Gemini's web interface. This enables the analysis of content far exceeding single prompt limits by progressively building up the context within the LLM's session memory.</em></figcaption>
      </figure>
    </div>

---

## ⚙️ Configuration Persistence (`config.json`) – LMTokenCook Remembers Your Settings

LMTokenCook aims to make your repeated use of the application more convenient by automatically remembering some of your most frequently used settings between sessions. This means you don't have to re-enter them every time you launch the application.

*   **Configuration File Name:** These persistent settings are saved in a file named `config.json`.
*   **Storage Location (Platform-Specific User Application Data Directory):**
    LMTokenCook uses the `appdirs` Python library to determine the standard, appropriate location for storing this user-specific configuration file on your operating system. This ensures it follows platform conventions and doesn't clutter your project directories. The typical locations are:
    *   **Windows:** `C:\Users\<YourUsername>\AppData\Roaming\LMTokenCook\LMTokenCook\config.json`
        *(Note: The `AppData` folder is often hidden by default in Windows File Explorer. You may need to enable "Show hidden files, folders, and drives" in your File Explorer options to navigate to it manually.)*
    *   **macOS:** `/Users/<YourUsername>/Library/Application Support/LMTokenCook/config.json`
        *(Note: The `~/Library` folder is also hidden by default in macOS Finder. You can access it by opening Finder, clicking "Go" in the menu bar, holding down the `Option` key on your keyboard – the "Library" option should then appear in the dropdown menu – and then navigating to `Application Support/LMTokenCook/`.)*
    *   **Linux (if you were to build and run LMTokenCook from source on Linux):** Typically `/home/<YourUsername>/.config/LMTokenCook/config.json`.
*   **Settings That Are Remembered by LMTokenCook:**
    The `config.json` file usually stores the following preferences from your last session:
    *   `last_output_dir`: The full path to the last "Output Parent Directory" you selected using the "Browse..." button.
    *   `last_serving_size`: The last value you entered for "Serving Size (Max Tokens)".
    *   `last_keep_masterfile_bool`: A boolean value (`true` or `false`) indicating whether the "Keep Master File" checkbox was checked in your last session.
    *   `last_add_line_numbers_bool`: A boolean value indicating whether the "Add Line Numbers" checkbox was checked.
    *   `last_skip_empty_lines_bool`: A boolean value indicating whether the "Skip Empty Lines" checkbox was checked.
*   **Resetting to Default Settings:**
    If you ever wish to reset these saved preferences and have LMTokenCook revert to its original, "factory default" settings for these fields, you can simply **delete the `config.json` file** from its storage location (as listed above for your OS). The next time you launch LMTokenCook after deleting this file, it will not find a saved configuration and will therefore start with its built-in default values. It will then create a new `config.json` file once you interact with settings that are saved.

---

## 🧾 Manifest File (`manifest.json`) Deep Dive – Understanding Your Processing Run

For every processing run that LMTokenCook completes, it generates a highly detailed report file named `manifest.json`. This file is saved in the unique, timestamped output subfolder created for that specific job. The `manifest.json` provides complete transparency and traceability for your data preparation process, and it can be invaluable for understanding exactly what happened, for debugging any issues, or for programmatic analysis of your corpus preparation if needed.

The `manifest.json` file is structured in JSON (JavaScript Object Notation) format, which is both human-readable (with some practice) and easily parsable by other programs or scripts. It typically contains the following main sections and types of information:

```json
{
  "metadata": {
    "app_version": "1.0.0", // Version of LMTokenCook used for this run
    "run_timestamp_utc": "YYYY-MM-DDTHH:MM:SS.ffffffZ", // Precise UTC timestamp of when the run started
    "input_source_type": "directory", // Could also be "files" if individual files were selected
    "input_paths": [ // List of absolute paths to the input sources
      "/path/to/your/selected_input_folder_or_file1",
      "/path/to/your/selected_input_file2" // (if multiple files were selected)
    ],
    "output_path_run_specific": "/path/to/your/main_output_parent_dir/Output_YYYY-MM-DD_HH-MM-SS", // Path to the unique output folder for this run
    "options_selected": { // A record of all user-selected processing options for this run
      "serving_size_tokens": 50000, // The max tokens per serving specified by the user
      "keep_master_file": true,    // Whether the master file was kept
      "add_line_numbers": false,   // Whether line numbers were added
      "skip_empty_lines": true     // Whether empty lines were skipped
    },
    "file_counts_summary": { // Summary statistics about the files processed
      "total_files_scanned_in_source": 150, // Total files (of any type) found in the input source
      "total_directories_scanned_in_source": 20, // Total subdirectories scanned
      "files_successfully_processed": 120,     // Number of files from which text was successfully extracted and included
      "files_skipped_binary_or_media": 20,   // Number of files skipped because they were identified as binary or media types
      "files_skipped_unsupported_extension": 5, // Number of files skipped due to having an unsupported/unrecognized file extension
      "files_skipped_due_to_being_empty": 3,    // Number of text-based files that were skipped because they contained no actual content
      "files_failed_extraction_or_read_error": 2 // Number of files that were of a supported type but an error occurred during text extraction or reading
    },
    "tokenization_details": { // Information about the tokenization process
      "tokenizer_used": "tiktoken_cl100k_base", // Name of the tokenizer encoding used
      "total_estimated_tokens_in_output": 1234567 // Grand total of estimated tokens for all processed content
    },
    "serving_output_summary": { // Details about the serving file generation (if applicable)
      "servings_were_created": true, // Boolean: true if servings were generated, false if not (e.g., total tokens < serving size, or serving size was 0)
      "number_of_servings_generated": 25, // Total number of serving_XXX_of_YYY.txt files created
      "tokens_per_serving_target_setting": 50000, // The user's target setting for tokens per serving
      "master_file_was_created": true, // Boolean: true if masterfile.txt was saved, false if "Keep Master File" was unchecked
      "master_file_name_generated": "masterfile.t-1234567.txt" // Name of the master file (if created), reflecting total tokens
    }
  },
  "directory_structure_map": { 
    // This section provides a nested dictionary (or similar JSON object structure) that mirrors
    // the directory structure of your scanned input source (if a directory was provided as input).
    // For each file and folder encountered within the source, it typically shows its processing status
    // (e.g., "PROCESSED", "SKIPPED_BINARY", "SKIPPED_DUE_TO_EXTENSION", "ERROR_DURING_READING", etc.)
    // and often includes a brief reason if it was skipped or if an error occurred.
    // Example (simplified):
    "my_project_root_folder_name": {
      "type": "directory",
      "status": "SCANNED_AND_PROCESSED_CONTENTS",
      "files_in_this_directory": {
        "main_script.py": {"type": "file", "status": "PROCESSED_OK", "reason_if_skipped_or_error": ""},
        "notes_for_project.txt": {"type": "file", "status": "PROCESSED_OK", "reason_if_skipped_or_error": ""}
      },
      "sub_directory_example": {
        "type": "directory",
        "status": "SCANNED_AND_PROCESSED_CONTENTS",
        "files_in_this_directory": {
          "logo_image.jpg": {"type": "file", "status": "SKIPPED_MEDIA_TYPE", "reason_if_skipped_or_error": "Skipped: Identified as a binary image file."},
          "temporary_binary_data.bin": {"type": "file", "status": "SKIPPED_BINARY_CONTENT", "reason_if_skipped_or_error": "Skipped: File appears to have binary content."}
        }
      }
    }
    // (If individual files were selected as input, this section might list them directly with their status)
  },
  "processed_files_detailed_list": [
    // This section provides an ordered list (usually in the order the files were processed or encountered)
    // containing more detailed information for each file that was successfully processed and included in the output.
    // Example for one processed file:
    {
      "processing_order_id": 1, // A unique sequential ID for this file in this processing run
      "relative_path_from_input_root": "my_project_root_folder_name/main_script.py", // Path relative to the input source
      "absolute_path_on_disk": "/full/path/on/your/computer/to/my_project_root_folder_name/main_script.py", // Full absolute path
      "original_character_count_in_file": 5020, // Number of characters in the file as read from disk
      "processed_character_count_for_output": 5000, // Number of characters included in the output (might differ if e.g., empty lines were skipped)
      "final_estimated_token_count_for_this_file": 1234, // Estimated tokens for just this file's content
      "text_extraction_method_used": "text/plain_or_code", // How text was extracted (e.g., "docx_extraction", "pdf_text_layer")
      "detected_or_used_file_encoding": "utf-8", // Character encoding used to read the file
      "final_processing_status_for_file": "PROCESSED_OK_INCLUDED_IN_OUTPUT"
    }
    // ... more entries for other successfully processed files would follow here
  ],
  "files_with_errors_or_skipped_summary": [
      // This section provides a list of any files that were encountered during scanning but had issues
      // that prevented them from being processed, or caused them to be intentionally skipped.
      // Example for one file that had an error:
      {
          "relative_path_from_input_root": "my_project_root_folder_name/documents/corrupted_report.docx",
          "absolute_path_on_disk": "/full/path/on/your/computer/to/my_project_root_folder_name/documents/corrupted_report.docx",
          "reason_for_error_or_skip": "ERROR_DURING_EXTRACTION",
          "error_message_details": "Failed to extract text from DOCX: The document file appears to be corrupted or is password-protected and could not be opened."
      },
      // Example for a file that was intentionally skipped:
      {
          "relative_path_from_input_root": "my_project_root_folder_name/assets/archive.zip",
          "absolute_path_on_disk": "/full/path/on/your/computer/to/my_project_root_folder_name/assets/archive.zip",
          "reason_for_error_or_skip": "SKIPPED_ARCHIVE_TYPE",
          "error_message_details": "Skipped: File extension .zip is recognized as an archive and not processed for text content."
      }
      // ... more entries for other files with errors or skips would follow here
  ]
}
```
This detailed `manifest.json` is invaluable for several purposes:
*   **Verification:** Allows you to verify exactly which files from your input source were included in the final output and which ones were excluded (and why).
*   **Token Analysis:** Helps you understand the token impact of individual files or groups of files within your dataset.
*   **Debugging:** If you find that expected text is missing from your output, or if a job seems to have processed fewer files than you anticipated, the manifest (especially the `directory_structure_map` and `files_with_errors_or_skipped_summary` sections) can help you quickly identify which files caused problems or were skipped.
*   **Programmatic Post-Processing:** If you have workflows that involve further programmatic analysis or manipulation of your text corpus after LMTokenCook has prepared it, the manifest provides structured metadata (like character offsets, token counts per file, relative paths) that can be very useful for such downstream tasks.

---

## 🛠️ Technical Details & Development Insights

A brief look under the hood at how LMTokenCook is built and some of the key technologies it uses:

*   **Core Architecture:** LMTokenCook is primarily a Python application (requiring Python 3.8 or newer if running from source). Its modern, themeable Graphical User Interface (GUI) is built using the excellent [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter) library, which provides an enhanced and more visually appealing widget set on top of Python's standard Tkinter GUI toolkit.
*   **Responsive Processing through Background Threading:** To ensure that the GUI remains responsive and does not freeze or hang during potentially long-running operations (like scanning thousands of files, extracting text from large documents, or tokenizing vast amounts of content), LMTokenCook employs Python's built-in `threading` and `queue.Queue` modules. These allow intensive tasks to be performed in background threads, separate from the main GUI thread. This enables the application to provide real-time progress updates to the user (via its progress bar and status log area) and to remain interactive (e.g., allowing the user to click the "Cancel" button if needed) even when it's busy working on a large job.
*   **Efficient Content Handling and Modification:** The internal processing pipeline of LMTokenCook is designed to handle content modifications (such as adding line numbers or skipping empty lines, if these options are selected by the user) efficiently. These modifications are typically applied to the text streams *before* the final consolidated output file(s) are written to disk. This approach aims to minimize memory footprint where possible, especially when dealing with very large input datasets.
*   **Development Environment & AI Assistance:** A significant portion of LMTokenCook was developed by Steven Seagondollar using Python directly within the **Windsurf IDE**. Windsurf is an AI-centric Integrated Development Environment, itself a fork of VS Code, also developed by Steven Seagondollar at DropShock Digital. This environment facilitated the use of advanced AI models (like OpenAI's GPT-4 series, including early access to variants such as GPT-4.1, via API calls integrated into Windsurf) for various aspects of the development process. These AI models provided valuable assistance with tasks such as code generation, debugging complex logic, refactoring code for clarity and efficiency, and exploring alternative approaches for feature implementation. This AI-assisted development process helped to accelerate the creation of LMTokenCook and refine many of its core functionalities.
*   **Key Python Dependencies (Libraries Used):**
    LMTokenCook relies on several powerful open-source Python libraries. The main ones include:
    *   Python 3.8+ (as the base language)
    *   `customtkinter` (for the GUI framework)
    *   `Pillow` (the Python Imaging Library fork, used for handling image assets within the GUI, like the logo)
    *   `tiktoken` (from OpenAI, for accurate language model token counting)
    *   `tkinterdnd2` (for enabling drag-and-drop functionality in the Tkinter-based GUI)
    *   `python-docx` (for reading text content from `.docx` Microsoft Word files)
    *   `pypdf` (for extracting text content from `.pdf` files that have a text layer)
    *   `appdirs` (for determining standard platform-specific directories to store the `config.json` user preferences file)
    *(For a complete list of dependencies and their specific versions used during development, please refer to the `requirements.txt` file in the LMTokenCook source code repository.)*
*   **Distribution (Packaged Applications):**
    The standalone, ready-to-run application packages for Windows (as an `.exe` installer) and macOS (as a `.dmg` disk image) are created using the [PyInstaller](https://pyinstaller.org/) tool. PyInstaller bundles the LMTokenCook Python application code and all its necessary dependencies into a single package that users can easily install and run without needing to have Python or any of the libraries installed on their system separately.

---

## 🌟 Steven Seagondollar & DropShock Digital LLC: Professional Overview

This section provides insight into the developer and the company behind LMTokenCook, offering context about the expertise and vision driving the project.

### Steven Seagondollar

Steven Seagondollar, the founder and driving force behind DropShock Digital LLC, is a multifaceted professional operating at the dynamic intersection of advanced technology, digital creativity, and strategic business development. His work is characterized by a commitment to innovation and a practical approach to solving complex challenges.

*   **Technological Proficiencies & Engineering Acumen:** Steven possesses a strong and continually evolving expertise in cutting-edge computational methods and software engineering. His skills encompass the full lifecycle of software development, including the architectural design, robust development, rigorous testing, and effective application of intelligent systems and complex software solutions. He has a deep and practical understanding of computer architecture, network infrastructure, data structures, and algorithms, which informs his approach to building scalable and efficient applications.
*   **Digital Development & Platform Architecture:** Steven is actively engaged in expanding his capabilities in building sophisticated online applications, backend systems, and integrated digital platforms. His technical skillset is broad, including proficiency in various programming languages (with a strong focus on Python for projects like LMTokenCook), modern web development technologies (front-end and back-end frameworks), database design and management (SQL and NoSQL), API development (RESTful, GraphQL), and cloud computing platforms.
*   **Creative Production & Digital Media Expertise:** Beyond pure technology, Steven demonstrates a significant mastery in a range of digital creative fields. This includes hands-on experience and a keen eye for visual content creation (photography, videography, graphic design), digital media production workflows, user interface (UI) and user experience (UX) design principles, and the strategic design and effective management of compelling online presences for businesses and individuals.
*   **Business & Leadership Acumen – From Vision to Execution:** Steven brings to the table a proven track record in several key business and leadership domains:
    *   **Project & Program Management:** Successfully managing complex technical projects from conception through to delivery, ensuring they meet objectives, timelines, and budget constraints.
    *   **Operational Framework Design:** Designing and implementing efficient operational frameworks, workflows, and standard operating procedures to streamline processes and enhance productivity.
    *   **Team Leadership & Mentorship:** Leading, motivating, and mentoring technical and creative teams, fostering a collaborative and high-performance environment.
    *   **Revenue Strategy & Business Development:** Developing and executing effective revenue generation strategies, identifying new business opportunities, and driving entrepreneurial ventures from idea to market viability.
    *   **Strategic Business Guidance:** Providing insightful strategic business consulting and guidance to help organizations leverage digital tools, advanced technologies, and innovative strategies to achieve their goals.
    *   **Client Relationship Management & Communication:** Building and maintaining strong client relationships through clear, proactive communication, understanding client needs, and ensuring high levels of satisfaction.
*   **Exceptional Communication & Interpersonal Skills:** Steven exhibits strong and versatile abilities in professional communication:
    *   Clearly and effectively articulating complex technical information and strategic concepts to diverse audiences, both technical and non-technical.
    *   Adapting his communication style and approach to suit different contexts, individuals, and objectives.
    *   Facilitating learning, knowledge transfer, and training within teams and for clients.
    *   Collaborating effectively and constructively with team members, partners, and stakeholders in a professional and results-oriented setting.

### DropShock Digital LLC

DropShock Digital LLC, founded by Steven Seagondollar, is a dynamic company that provides a comprehensive suite of cutting-edge digital solutions and strategic services. The company's philosophy emphasizes the practical and innovative application of advanced technologies to solve real-world problems and create tangible value for its clients.

*   **Intelligent Systems & AI-Powered Solutions:** A core focus of DropShock Digital is the development and implementation of intelligent systems, leveraging artificial intelligence (AI), machine learning (ML), and data analytics to automate processes, enhance digital user interactions, derive actionable insights from data, and create smarter software products.
*   **Digital Media Creation & Production:** DropShock Digital offers deep expertise in the creation, production, and management of high-quality digital media and visual content. This includes professional photography, videography, motion graphics, animation, graphic design, and content strategy tailored for various digital platforms.
*   **Digital Platform Design & Development:** The company specializes in designing and building robust, scalable, and user-centric digital platforms and online infrastructures. This encompasses custom web application development, mobile app development, e-commerce solutions, content management systems (CMS), and API integrations.
*   **Strategic Digital Consulting & Guidance:** DropShock Digital provides expert strategic consulting to help businesses and organizations effectively navigate the digital landscape. This includes advising on digital transformation initiatives, technology adoption, online marketing strategies, data utilization, and how to best leverage digital tools and innovative strategies to achieve specific business objectives and gain a competitive edge.

DropShock Digital LLC is passionately committed to delivering innovative, effective, and high-impact digital solutions by seamlessly integrating deep technical expertise with a strong focus on understanding and addressing the unique needs and goals of each client. The aim is always to provide solutions that are not just technologically advanced, but also practical, sustainable, and drive measurable results.

---

## ❓ Troubleshooting / Frequently Asked Questions (FAQ)

Encountering an issue while using LMTokenCook, or have a question about its behavior? Check these common questions and solutions first. For persistent problems that aren't addressed here, please refer to the "Support & Contact Information" section further down for how to get help.

1.  **Error Message: `ModuleNotFoundError: No module named 'customtkinter'` (or `'tiktoken'`, `'pypdf'`, `'docx'`, etc.) when I try to run LMTokenCook from its source code.**
    *   **Probable Cause:** This error almost always indicates that one or more of the necessary Python libraries (which are called "dependencies") that LMTokenCook needs to function correctly are not installed in your current Python environment. Another common cause is that your Python virtual environment (e.g., `venv_lmtc`) is not currently active when you are attempting to run the script.
    *   **Solution Steps:**
        1.  First, ensure that you have navigated your terminal or command prompt to the main LMTokenCook project's root directory (the one that contains the `requirements.txt` file).
        2.  Next, make absolutely sure that you have **activated the Python virtual environment** that you created specifically for this project (see the "For Developers: Running from Source Code" part of the "Installation" section for activation commands for your OS). Your terminal prompt should be prefixed with the venv name (e.g., `(venv_lmtc)`).
        3.  Now that your virtual environment is active, re-install or ensure all dependencies are installed using `pip` (Python's package installer), making sure to use the `pip` associated with your Python 3.8+ environment (using `python3 -m pip` is often the most explicit way):
            ```bash
            python3 -m pip install -r requirements.txt
            ```
            This command reads the `requirements.txt` file and installs all listed packages into your active virtual environment. If a module is still reported missing after this, double-check that the installation process completed without errors and that `requirements.txt` is complete and correctly formatted.

2.  **Application is Unresponsive or Appears to Hang During Processing:**
    *   **Probable Cause:** Processing very large files, a huge number of individual files, or files in complex formats (like some PDFs or DOCX) can be computationally intensive and take a significant amount of time, even though LMTokenCook uses background threading to try to keep the GUI responsive. In some cases, an unexpected error during a background task might also cause the application to appear unresponsive if the error isn't caught and handled in a way that updates the GUI.
    *   **Solution Steps:**
        *   **Allow Sufficient Time:** Especially for very large inputs, allow a reasonable amount of time for LMTokenCook to complete its work. Check the status log in the GUI for any messages indicating activity.
        *   **Check System Resources:** If your computer's CPU usage is very high or if you are running low on available RAM (memory), this can slow down all applications, including LMTokenCook. Close other resource-intensive programs if possible.
        *   **Cancel and Retry (with simpler input if needed):** If the application remains unresponsive for an unusually long time and the progress bar isn't moving, you can try using the "Cancel" button (if it's responsive). If you have to force quit, try restarting LMTokenCook and processing a smaller subset of your data or simpler file types first to see if the issue is related to a specific problematic file or the sheer volume of data.
        *   **Review `manifest.json` (if generated):** If a previous run partially completed or if you manage to get a run to finish after a hang, the `manifest.json` file (in the output folder for that run) might provide clues in its error log section about specific files that caused problems.
        *   **Report Persistent Hangs:** If you encounter persistent hangs with specific types of files or datasets that you believe should be manageable, please report this as a bug (see "Support & Contact Information"), providing as much detail as possible about your input data and system.

3.  **Issues with Text Extraction from PDF or DOCX Files (e.g., output is empty, incomplete, or garbled for these files):**
    *   **Probable Causes:**
        *   **For PDF Files:**
            *   **Image-Only PDF (No Text Layer):** The most common issue. If your PDF is essentially a collection of scanned images and does not have an actual selectable text layer (i.e., you can't select text with your mouse in a PDF viewer), then LMTokenCook (which uses `pypdf`) will not be able to extract text from it because `pypdf` does not perform Optical Character Recognition (OCR).
            *   **Password-Protected or Encrypted PDF:** LMTokenCook cannot process password-protected or encrypted PDFs. You would need to remove the protection first using other tools.
            *   **Complex Layouts or Non-Standard Fonts/Encodings:** PDFs with very complex visual layouts (e.g., multiple columns that don't flow linearly, text embedded within intricate graphics, unusual table structures) or those using non-standard fonts or character encodings might not be parsed correctly by `pypdf`, leading to missing or garbled text.
        *   **For DOCX Files (Microsoft Word):**
            *   **Corrupted File:** The `.docx` file itself might be corrupted and unreadable by `python-docx`.
            *   **Password-Protected File:** Password-protected `.docx` files cannot be processed.
            *   **Older `.doc` Format:** LMTokenCook (via `python-docx`) is designed for the modern XML-based `.docx` format (from Word 2007 and later). It generally does not support the older binary `.doc` format (from Word 97-2003). You would need to convert such files to `.docx` first using Microsoft Word or another converter.
            *   **Highly Complex Embedded Objects or Formatting:** While `python-docx` handles standard text well, very complex embedded objects (like intricate charts, SmartArt with text, or images with unusual text wrapping that isn't part of the main document text flow) or extremely complex formatting might sometimes affect the completeness or flow of the extracted text.
    *   **Solution Steps:**
        *   **Check the `manifest.json`:** After a processing run, always look at the `manifest.json` file in your output folder. It will contain error messages or skip reasons for any files that could not be processed correctly. This is your first clue.
        *   **For Image-Only PDFs:** You will need to use an external Optical Character Recognition (OCR) tool (there are many available, both free and commercial, online and offline) to convert your image-only PDFs into PDFs that have a selectable text layer *before* you process them with LMTokenCook.
        *   **For Password-Protected Files:** You must remove the password protection using the originating application (e.g., Adobe Acrobat for PDFs, Microsoft Word for DOCX) or another appropriate tool before LMTokenCook can process them.
        *   **For Older `.doc` Files:** Open them in Microsoft Word (or a compatible editor like LibreOffice Writer) and re-save them in the modern `.docx` format.
        *   **For Complex Layouts/Formatting:** If text is missing from a complex PDF or DOCX, try simplifying the document's layout if possible, or copy-pasting the text into a plain text file (`.txt`) as a workaround before processing with LMTokenCook if the formatting is not essential for the LLM's understanding. Extraction from these formats is always a "best-effort" process.

4.  **The Token Counts or the Size of the "Servings" Seem Slightly Different From What I Expected, or a Serving Slightly Exceeds My Max Token Limit.**
    *   **Probable Causes & Explanation:**
        *   **Tokenization is an Estimate (Though a Very Good One):** As explained in the "Understanding the AI Playground" section, LMTokenCook uses OpenAI's `tiktoken` library with the `cl100k_base` encoding, which is highly accurate for many major models. However, the *absolute exact* token count that a specific LLM service provider (like Google for Gemini or Anthropic for Claude) assigns internally to a piece of text can sometimes vary by a very small margin from `tiktoken`'s count. This can be due to their own proprietary tokenizer implementations, minor version differences in their tokenization algorithms, or special handling of certain unique characters or sequences by their internal systems. The "headroom" you leave when setting your "Serving Size (Max Tokens)" (as advised in the "Mandatory Reading" section) is designed to comfortably accommodate these minor potential variations.
        *   **Handling of Very Long, Unbreakable Lines:** LMTokenCook's logic for splitting content into servings tries to do so at logical points (like newlines between paragraphs or code lines) to maintain readability and structural integrity. However, if it encounters an extremely long, single line of text that has no natural break points (e.g., a minified line of JavaScript code, a very long URL, a base64 encoded data string, or a line from a log file with no spaces) and this long line happens to fall right at a potential split point for a serving, the serving containing that line might end up slightly exceeding your specified token limit. This is because LMTokenCook generally prioritizes not breaking such long, single lines in the middle of a token or character sequence where feasible, as doing so could corrupt code, data, or meaning. It's a trade-off between strict adherence to the token limit and preserving the integrity of such lines. This is another reason why leaving some headroom in your serving size setting is a good practice.
    *   **Solution / Best Practice:**
        *   The most important thing is to follow the advice in the "Mandatory Reading" section: **always set your "Serving Size (Max Tokens)" in LMTokenCook to be somewhat *less* than the absolute maximum prompt input limit of your target LLM web interface.** This buffer accounts for these small variations and for the tokens needed for your own instructions.
        *   If you need very precise token counts for analysis (e.g., for API cost estimation if you were using an API), the `manifest.json` file provides the final estimated token counts for each processed file and for the total output, which are based on `tiktoken`. These are excellent for such estimations.

5.  **How Can I Reset LMTokenCook's Saved Settings (like the last output path I used, or my last serving size setting) Back to Their Original Defaults?**
    *   **Solution:** LMTokenCook saves these preferences in a `config.json` file located in your user-specific application data directory (see the "Configuration Persistence (`config.json`)" section above for the typical paths for your operating system). To reset these saved settings and have LMTokenCook start with its "factory defaults" again, simply **delete this `config.json` file** from its storage location.
        *   Make sure LMTokenCook is not running when you delete the file.
        *   The next time you launch LMTokenCook after deleting this file, it will not find a saved configuration and will therefore start up with its built-in default values for these settings. It will then create a new `config.json` file in that location once you interact with settings that are normally saved (e.g., when you choose an output path or set a serving size and then close the application, or if it saves on change).

6.  **Drag-and-Drop Functionality for Input Files/Folders Doesn't Seem to Be Working on My System.**
    *   **Probable Cause:** Drag-and-drop functionality in LMTokenCook (which is a Tkinter-based application using CustomTkinter) relies on an underlying library called `TkinterDnd2`. While this library is generally robust and works well on Windows and macOS, there can occasionally be OS-specific quirks, conflicts with other software running on your system that might interfere with drag-and-drop events, or (very rarely) issues with how it's bundled in the packaged application if a specific system library it depends on is missing or incompatible on your particular OS setup.
    *   **Solution / Workaround:**
        *   **Always use the "Browse Folder..." or "Browse File(s)..." buttons within the LMTokenCook GUI as the primary and most reliable method for selecting your input sources.** These buttons use standard system file dialogs which are very robust.
        *   If you are running LMTokenCook from its source code, particularly on Linux, the `TkinterDnd2` library might sometimes require the manual installation of an underlying `tkdnd` system library package (e.g., via your Linux distribution's package manager like `apt` or `yum`). Check the `TkinterDnd2` library's documentation if you encounter issues specifically on Linux from source. For packaged Windows and macOS versions, all necessary components for drag-and-drop should ideally be bundled.

7.  **I'm getting "Permission Denied" or similar errors when I try to select an Output Parent Directory, or when LMTokenCook tries to write files during processing.**
    *   **Probable Cause:** This usually means that your current user account on the computer does not have the necessary "write" permissions for the specific output parent directory you have selected, or for one of the subdirectories that LMTokenCook is trying to create within it (like the timestamped run folder or the serving file folders). Antivirus software or other system security tools could also, in rare cases, interfere and block write operations if they mistakenly flag LMTokenCook's activity as suspicious.
    *   **Solution Steps:**
        *   **Choose a Writable Output Location:** Ensure that you select an output parent directory for which your current user account has full read and write permissions. Good choices are usually folders within your own user profile (like your `Documents` folder, your `Desktop`, or a dedicated `Projects` or `LMTokenCook_Outputs` folder you create there). Avoid trying to write directly to restricted system folders (like the root of C: on Windows, or system-level Program Files folders, or system folders on macOS) unless you have explicitly adjusted permissions or are running with administrative rights (which is generally not recommended for routine use – see below).
        *   **Check Folder Permissions (if needed):** If you are trying to write to a specific folder and encounter issues, you can check its permissions using your operating system's tools (as described in FAQ #3 above for source folder permissions – the process is the same for checking output folder permissions).
        *   **Antivirus/Security Software:** As a temporary diagnostic step if you strongly suspect interference, you could try briefly disabling your antivirus or other security software, or adding LMTokenCook to its exclusion list. Remember to re-enable your security software or refine its rules afterward.
        *   **Avoid Running as Administrator/Root (Unless Absolutely Necessary and Understood):** While running LMTokenCook with elevated (Administrator on Windows or `sudo` on macOS/Linux) privileges might seem like a quick way to bypass permission errors, it's generally not a good practice for everyday application use. It can sometimes lead to the application creating files and folders with ownership or permissions that are then problematic for your regular, non-administrator user account to access or modify later. It's usually better to ensure that the output locations you choose are correctly permissioned for your standard user account.

---

## 🛠️ Technical Details & Development Insights

A brief look under the hood at how LMTokenCook is built and some of the key technologies it uses:

*   **Core Architecture:** LMTokenCook is primarily a Python application (requiring Python 3.8 or newer if running from source). Its modern, themeable Graphical User Interface (GUI) is built using the excellent [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter) library, which provides an enhanced and more visually appealing widget set on top of Python's standard Tkinter GUI toolkit.
*   **Responsive Processing through Background Threading:** To ensure that the GUI remains responsive and does not freeze or hang during potentially long-running operations (like scanning thousands of files, extracting text from large documents, or tokenizing vast amounts of content), LMTokenCook employs Python's built-in `threading` and `queue.Queue` modules. These allow intensive tasks to be performed in background threads, separate from the main GUI thread. This enables the application to provide real-time progress updates to the user (via its progress bar and status log area) and to remain interactive (e.g., allowing the user to click the "Cancel" button if needed) even when it's busy working on a large job.
*   **Efficient Content Handling and Modification:** The internal processing pipeline of LMTokenCook is designed to handle content modifications (such as adding line numbers or skipping empty lines, if these options are selected by the user) efficiently. These modifications are typically applied to the text streams *before* the final consolidated output file(s) are written to disk. This approach aims to minimize memory footprint where possible, especially when dealing with very large input datasets.
*   **Development Environment & AI Assistance:** A significant portion of LMTokenCook was developed by Steven Seagondollar using Python directly within the **Windsurf IDE**. Windsurf is an AI-centric Integrated Development Environment, itself a fork of VS Code, also developed by Steven Seagondollar at DropShock Digital. This environment facilitated the use of advanced AI models (like OpenAI's GPT-4 series, including early access to variants such as GPT-4.1, via API calls integrated into Windsurf) for various aspects of the development process. These AI models provided valuable assistance with tasks such as code generation, debugging complex logic, refactoring code for clarity and efficiency, and exploring alternative approaches for feature implementation. This AI-assisted development process helped to accelerate the creation of LMTokenCook and refine many of its core functionalities.
*   **Key Python Dependencies (Libraries Used):**
    LMTokenCook relies on several powerful open-source Python libraries. The main ones include:
    *   Python 3.8+ (as the base language)
    *   `customtkinter` (for the GUI framework)
    *   `Pillow` (the Python Imaging Library fork, used for handling image assets within the GUI, like the logo)
    *   `tiktoken` (from OpenAI, for accurate language model token counting)
    *   `tkinterdnd2` (for enabling drag-and-drop functionality in the Tkinter-based GUI)
    *   `python-docx` (for reading text content from `.docx` Microsoft Word files)
    *   `pypdf` (for extracting text content from `.pdf` files that have a text layer)
    *   `appdirs` (for determining standard platform-specific directories to store the `config.json` user preferences file)
    *(For a complete list of dependencies and their specific versions used during development, please refer to the `requirements.txt` file in the LMTokenCook source code repository.)*
*   **Distribution (Packaged Applications):**
    The standalone, ready-to-run application packages for Windows (as an `.exe` installer) and macOS (as a `.dmg` disk image, distributed within a `.zip` archive) are created using the [PyInstaller](https://pyinstaller.org/) tool. PyInstaller bundles the LMTokenCook Python application code and all its necessary dependencies into a single package that users can easily install and run without needing to have Python or any of the libraries installed on their system separately.

---

## 🌟 Steven Seagondollar & DropShock Digital LLC: Professional Overview

This section provides insight into the developer and the company behind LMTokenCook, offering context about the expertise and vision driving the project.

### Steven Seagondollar

Steven Seagondollar, the founder and driving force behind DropShock Digital LLC, is a multifaceted professional operating at the dynamic intersection of advanced technology, digital creativity, and strategic business development. His work is characterized by a commitment to innovation and a practical approach to solving complex challenges.

*   **Technological Proficiencies & Engineering Acumen:** Steven possesses a strong and continually evolving expertise in cutting-edge computational methods and software engineering. His skills encompass the full lifecycle of software development, including the architectural design, robust development, rigorous testing, and effective application of intelligent systems and complex software solutions. He has a deep and practical understanding of computer architecture, network infrastructure, data structures, and algorithms, which informs his approach to building scalable and efficient applications.
*   **Digital Development & Platform Architecture:** Steven is actively engaged in expanding his capabilities in building sophisticated online applications, backend systems, and integrated digital platforms. His technical skillset is broad, including proficiency in various programming languages (with a strong focus on Python for projects like LMTokenCook), modern web development technologies (front-end and back-end frameworks), database design and management (SQL and NoSQL), API development (RESTful, GraphQL), and cloud computing platforms.
*   **Creative Production & Digital Media Expertise:** Beyond pure technology, Steven demonstrates a significant mastery in a range of digital creative fields. This includes hands-on experience and a keen eye for visual content creation (photography, videography, graphic design), digital media production workflows, user interface (UI) and user experience (UX) design principles, and the strategic design and effective management of compelling online presences for businesses and individuals.
*   **Business & Leadership Acumen – From Vision to Execution:** Steven brings to the table a proven track record in several key business and leadership domains:
    *   **Project & Program Management:** Successfully managing complex technical projects from conception through to delivery, ensuring they meet objectives, timelines, and budget constraints.
    *   **Operational Framework Design:** Designing and implementing efficient operational frameworks, workflows, and standard operating procedures to streamline processes and enhance productivity.
    *   **Team Leadership & Mentorship:** Leading, motivating, and mentoring technical and creative teams, fostering a collaborative and high-performance environment.
    *   **Revenue Strategy & Business Development:** Developing and executing effective revenue generation strategies, identifying new business opportunities, and driving entrepreneurial ventures from idea to market viability.
    *   **Strategic Business Guidance:** Providing insightful strategic business consulting and guidance to help organizations leverage digital tools, advanced technologies, and innovative strategies to achieve their goals.
    *   **Client Relationship Management & Communication:** Building and maintaining strong client relationships through clear, proactive communication, understanding client needs, and ensuring high levels of satisfaction.
*   **Exceptional Communication & Interpersonal Skills:** Steven exhibits strong and versatile abilities in professional communication:
    *   Clearly and effectively articulating complex technical information and strategic concepts to diverse audiences, both technical and non-technical.
    *   Adapting his communication style and approach to suit different contexts, individuals, and objectives.
    *   Facilitating learning, knowledge transfer, and training within teams and for clients.
    *   Collaborating effectively and constructively with team members, partners, and stakeholders in a professional and results-oriented setting.

### DropShock Digital LLC

DropShock Digital LLC, founded by Steven Seagondollar, is a dynamic company that provides a comprehensive suite of cutting-edge digital solutions and strategic services. The company's philosophy emphasizes the practical and innovative application of advanced technologies to solve real-world problems and create tangible value for its clients.

*   **Intelligent Systems & AI-Powered Solutions:** A core focus of DropShock Digital is the development and implementation of intelligent systems, leveraging artificial intelligence (AI), machine learning (ML), and data analytics to automate processes, enhance digital user interactions, derive actionable insights from data, and create smarter software products.
*   **Digital Media Creation & Production:** DropShock Digital offers deep expertise in the creation, production, and management of high-quality digital media and visual content. This includes professional photography, videography, motion graphics, animation, graphic design, and content strategy tailored for various digital platforms.
*   **Digital Platform Design & Development:** The company specializes in designing and building robust, scalable, and user-centric digital platforms and online infrastructures. This encompasses custom web application development, mobile app development, e-commerce solutions, content management systems (CMS), and API integrations.
*   **Strategic Digital Consulting & Guidance:** DropShock Digital provides expert strategic consulting to help businesses and organizations effectively navigate the digital landscape. This includes advising on digital transformation initiatives, technology adoption, online marketing strategies, data utilization, and how to best leverage digital tools and innovative strategies to achieve specific business objectives and gain a competitive edge.

DropShock Digital LLC is passionately committed to delivering innovative, effective, and high-impact digital solutions by seamlessly integrating deep technical expertise with a strong focus on understanding and addressing the unique needs and goals of each client. The aim is always to provide solutions that are not just technologically advanced, but also practical, sustainable, and drive measurable results.

---

## 🤝 Contributing & Special Thanks

Contributions to LMTokenCook in the form of bug reports and feature suggestions are warmly welcome! The best way to contribute is by using the [**GitHub Issues page**](https://github.com/seagpt/LMTokenCook/issues) for the project. Please feel free to:
*   **Report Bugs:** If you find something that's not working as expected, please create a new issue. Try to include details like your operating system, the version of LMTokenCook you are using, clear steps to reproduce the bug, what you expected to happen, and what actually happened. If a `manifest.json` file was generated and is relevant to the bug, including its contents (or parts of it) can be very helpful.
*   **Suggest New Features or Enhancements:** If you have ideas for new functionalities that would make LMTokenCook even more useful, or improvements to existing features, please share them by creating a feature request issue.
*   **Ask Questions:** If you have questions about using LMTokenCook that aren't covered in this README or in existing issues, feel free to ask.

**Special Thanks To:**

*   **Garrett Montagne:** For his invaluable technical assistance and expertise in resolving complex challenges related to `tiktoken` dependencies and the cross-platform packaging of LMTokenCook for both Windows and macOS. Garrett's contributions significantly improved the reliability of the build process and provided crucial troubleshooting support during key phases of development. His help was instrumental in making the packaged applications robust.

---

## 🙏 Acknowledgements: Built with the Best of Open Source

LMTokenCook stands on the shoulders of giants, leveraging the power and innovation of the Python ecosystem and several key open-source libraries. Our sincere gratitude goes to the talented developers, dedicated maintainers, and vibrant communities behind these projects for their incredible work and their commitment to sharing:

*   **[Python Programming Language](https://www.python.org/)**: The versatile, powerful, and elegant high-level programming language (LMTokenCook targets Python 3.8 and newer) that forms the very foundation of this application.
*   **[CustomTkinter](https://github.com/TomSchimansky/CustomTkinter)**: An excellent Python library by Tom Schimansky that provides beautiful, modern, and themeable Tkinter GUI widgets, allowing LMTokenCook to have a polished and user-friendly interface.
*   **[OpenAI Tiktoken](https://github.com/openai/tiktoken)**: The official token counting library from OpenAI, used by LMTokenCook for accurate and efficient estimation of language model token counts, crucial for its "serving" functionality.
*   **[pypdf](https://github.com/py-pdf/pypdf)**: A robust Python library for working with PDF files, utilized by LMTokenCook for its PDF text extraction capabilities (from PDFs with existing text layers).
*   **[python-docx](https://github.com/python-openxml/python-docx)**: The go-to Python library for creating and updating Microsoft Word (`.docx`) files, used here for reading and extracting text content from `.docx` documents.
*   **[Appdirs](https://github.com/ActiveState/appdirs)**: A helpful Python module for determining appropriate platform-specific directories for storing application data, such as LMTokenCook's user configuration file (`config.json`).
*   **[TkinterDnd2](https://github.com/python-tkdnd/tkdnd/)**: A Python wrapper for the Tk DND (Drag and Drop) extension, enabling the convenient drag-and-drop functionality for input files and folders in LMTokenCook's GUI.
*   **[Pillow (The Friendly PIL Fork)](https://python-pillow.org/)**: The indispensable Python Imaging Library, used by LMTokenCook primarily for handling image assets within its GUI (such as the application logo).
*   **[PyInstaller](https://pyinstaller.org/)**: The powerful and widely-used tool that bundles the LMTokenCook Python application and all its dependencies into standalone executables for Windows (`.exe`) and macOS (`.app` bundles). This makes LMTokenCook easily accessible to end-users who may not have a Python environment installed on their computers.

And a broader, heartfelt thank you to the vast and vibrant **Python open-source community** as a whole. The incredible array of high-quality libraries, the collaborative spirit, and the wealth of shared knowledge make it possible for useful tools like LMTokenCook to be developed efficiently and shared with users worldwide.

---

## 🛟 Need Help? Support & Contact Information

Your experience with LMTokenCook is very important to us at DropShock Digital LLC. If you encounter any issues while using the application, believe you've discovered a potential bug, have security concerns, have brilliant ideas for new features or improvements, or simply want to share your general feedback or ask questions that aren't addressed in this README, please don't hesitate to reach out. Your input is essential for the reliability, security, and ongoing improvement of this tool.

**How to Contact DropShock Digital LLC for Support:**

*   **Preferred Method for Technical Support & Bug Reports (Email):**
    For technical support inquiries, reporting bugs (especially if you can provide the `manifest.json` file from a problematic run for detailed diagnosis), or if you have private feedback or questions, please email us directly at:
    [support@dropshockdigital.com](mailto:support@dropshockdigital.com?subject=LMTokenCook%20Support%2FFeedback%20(Version%201.0.0))
    *(When emailing, please try to include "LMTokenCook" and the version number (e.g., "v1.0.0" for this initial release) in your subject line. This helps us categorize and respond to your inquiry more effectively.)*

*   **GitHub Issues (The official platform for public bug tracking, feature requests & community discussion):**
    The project's GitHub Issues page is the official and preferred place to report bugs that other users might also encounter, to request new features or enhancements you'd like to see, and to engage in discussions about technical aspects or potential improvements for LMTokenCook:
    [https://github.com/seagpt/LMTokenCook/issues](https://github.com/seagpt/LMTokenCook/issues)
    *   ***Before submitting a new issue:*** Please take a moment to search through the existing open and closed issues on the GitHub page. It's possible that your problem or suggestion has already been discussed, reported, or even resolved. This helps avoid duplicate efforts and keeps the issue tracker organized for everyone.
    *   ***When reporting a bug:*** Please provide as much detail as possible. Refer to the checklist at the end of the "Troubleshooting / FAQ" section for a list of helpful information to include in your bug report (such as your OS version, the LMTokenCook version you are using, clear steps to reproduce the issue, any error messages, screenshots, and the relevant `manifest.json` file if applicable).

*   **Company Website & General Business Inquiries:**
    For more information about DropShock Digital LLC, our other software projects, digital media services, or for general business-related inquiries, please visit our official website:
    [https://www.dropshockdigital.com](https://www.dropshockdigital.com)

*   **Direct Contact (Phone - primarily for urgent business inquiries or specific pre-arranged consultations):**
    +1 (760) 209-5480 (This is a United States phone number). *Please note that for general technical support with LMTokenCook, using email or the GitHub Issues page is typically more efficient, as these channels allow for easier tracking of issues and the exchange of detailed information like log files, manifests, and screenshots.*

**What to Include When Contacting Support for an Issue:**
To help us assist you as quickly and effectively as possible, please try to include the following details when you report an issue:
*   Your **Operating System and its exact version** (e.g., "Windows 11 Pro Version 23H2 OS Build 22631.xxxx", or "macOS Sonoma Version 14.4.1 (23E224)").
*   The **version of LMTokenCook** you are using (e.g., "v1.0.0" for this initial release; this is often found in an "About" dialog in the GUI or in the release notes for the version you downloaded).
*   **Clear, precise, step-by-step instructions** on how to reliably reproduce the issue you are experiencing. The more detail you can provide about what you did leading up to the problem, the better.
*   Any **error messages** that were displayed on your screen by LMTokenCook (either within the GUI's log area, in a pop-up error dialog window, or in the console output if you were running from source). Screenshots of these messages are very helpful.
*   The relevant **`manifest.json` file** (if the issue relates to a specific processing run and a manifest was generated). You can often attach this file to emails or include its content in GitHub issues.
*   A brief but clear description of the **expected behavior** (i.e., what you thought LMTokenCook *should* have done) versus the **actual behavior** you observed.

**Your Privacy and Security When Requesting Support:**
All support requests made directly to DropShock Digital LLC via email or phone are handled with strict confidentiality. We are committed to helping you use LMTokenCook effectively and aim to respond to all inquiries as promptly and thoroughly as possible.

Thank you for using LMTokenCook and for helping us make it an even better and more valuable tool for the AI user community!

---

## 📜 License Information

**LMTokenCook Application Software**
Copyright (c) 2024-2025 Steven Seagondollar, DropShock Digital LLC.
All Rights Reserved by DropShock Digital LLC and Steven Seagondollar as applicable under copyright law.

This LMTokenCook project is licensed to you, the user, under the terms of the **MIT License**.
A complete copy of the full license text is included in the file named `LICENSE.md`, which should be located in the root directory of this project's source code repository. If you downloaded a pre-built packaged version of LMTokenCook, the license file may also be included with the application installer or accessible via an "About" dialog within the application itself.

**Key Permissions & Conditions of the MIT License (Summary for General Understanding):**

The MIT License is a very permissive and widely used free software license. This means it places minimal restrictions on how you, as a user or developer, can use, modify, and distribute the software. In essence, it grants you broad freedoms:

*   **Freedom to Use:** You are completely free to use the LMTokenCook software for any purpose you see fit. This includes using it for commercial (business) ventures, private personal projects, academic research, and educational activities, without any royalty payments or usage fees being due to DropShock Digital LLC.
*   **Freedom to Modify:** If you have the source code, you have the right to modify the LMTokenCook software to suit your specific needs, to fix bugs you might find, or to add new features and improvements for your own use or to share with others.
*   **Freedom to Distribute:** You are permitted to redistribute copies of the LMTokenCook software to others, either in its original, unmodified form or as modified by you (provided you adhere to the license conditions, primarily regarding notice preservation).
*   **Freedom to Sublicense:** You can grant sublicenses to others, allowing them to also use, modify, and distribute the software under the same terms of the MIT license.

**The primary conditions and obligations that come with the MIT License are simple and straightforward:**

1.  **Preservation of Copyright Notice and Permission Notice:** The original copyright notice (as stated at the top of this section, typically in the format "Copyright (c) YEAR Author Name") and the permission notice (which is the full text of the MIT License itself, as found in the `LICENSE.md` file) must be included in all copies or substantial portions of the Software that you distribute. This is a standard requirement of most open-source licenses and ensures that the original authorship and the terms under which the software is shared are always clear.
2.  **"AS IS" Warranty Disclaimer & No Liability:** The LMTokenCook software is provided to you "AS IS", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. This means that there is no guarantee from DropShock Digital LLC or Steven Seagondollar that the software is perfect, completely error-free, or will meet all your specific requirements or expectations. This disclaimer of warranty includes, but is not limited to, any implied warranties of MERCHANTABILITY (i.e., that the software is of a certain average quality or fit for general sale) and FITNESS FOR A PARTICULAR PURPOSE (i.e., that the software will successfully do what you specifically want it to do for your use case), and NON-INFRINGEMENT (i.e., that the software doesn't violate someone else's patents, copyrights, or other intellectual property rights).
    Furthermore, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS (Steven Seagondollar, DropShock Digital LLC) BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE ITSELF OR FROM YOUR USE OR INABILITY TO USE THE SOFTWARE. This comprehensive limitation of liability includes (but is not limited to) any loss of data, loss of profits, business interruption, or any other direct, indirect, incidental, special, exemplary, or consequential damages that might arise from your use of, or inability to use, LMTokenCook, even if you have been advised of the possibility of such damages.

Please take the time to review the full `LICENSE.md` text for the complete, official, and legally binding terms and conditions under which LMTokenCook is provided. Your decision to download, install, use, modify, or distribute LMTokenCook signifies your understanding and acceptance of these MIT License terms.
