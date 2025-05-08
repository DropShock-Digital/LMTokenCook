<div align="center">
  <img src="assets/LMTC_Patch.png" alt="LMTokenCook Logo" width="150" style="margin-bottom:10px;"/>
  <h1>LMTokenCook</h1>
  <h3 align="center" style="font-weight: normal; margin-top: -10px; margin-bottom: 10px;">Cook Your Files into AI-Ready Servings 🍳</h3>
  <p><strong>A tool for AI power-users by <a href="https://www.dropshockdigital.com" target="_blank" rel="noopener noreferrer">Steven Seagondollar, DropShock Digital LLC</a></strong></p>
  <a href="https://www.dropshockdigital.com" target="_blank" rel="noopener noreferrer">
    <img src="assets/(White) DropShock Digital - Photography Watermark Version 2.png" alt="DropShock Digital - Creators for Creators" width="350" style="margin-top: 5px; margin-bottom: 20px;"/>
  </a>
  <p>
    <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"/></a>
    <a href="https://www.python.org/downloads/release/python-380/"><img src="https://img.shields.io/badge/python-3.8+-blue.svg" alt="Python 3.8+"/></a>
    <a href="https://github.com/seagpt/LMTokenCook/releases/latest"><img src="https://img.shields.io/github/v/release/seagpt/LMTokenCook?label=latest%20version" alt="Latest Release"/></a>
    <a href="https://github.com/seagpt/LMTokenCook/releases"><img src="https://img.shields.io/github/downloads/seagpt/LMTokenCook/total?label=downloads" alt="Total Downloads"/></a>
  </p>
</div>

---

## 🚀 Quick Download Links

Get the latest version of LMTokenCook directly:

*   🪟 **Windows:**
    *   [**LMTokenCook Installer (.exe)**](https://github.com/seagpt/LMTokenCook/releases/latest/download/LMTokenCook_Installer.exe)
    *   [**LMTokenCook Portable (.zip)**](https://github.com/seagpt/LMTokenCook/releases/latest/download/LMTokenCook_Portable.zip)
*   🍎 **macOS:**
    *   [**LMTokenCook Universal (.dmg)**](https://github.com/seagpt/LMTokenCook/releases/latest/download/LMTokenCook.dmg)

<div align="center" style="margin-top:10px; font-size:0.9em;">
  <em>Always check the <a href="https://github.com/seagpt/LMTokenCook/releases/latest" target="_blank" rel="noopener noreferrer"><strong>Official Releases Page</strong></a> for the very latest versions, release notes, and other assets.</em>
</div>

---

<div align="center">
  <figure style="margin: 25px auto;">
    <img src="assets/Program_Preview.png" alt="LMTokenCook GUI Screenshot on macOS" width="75%" style="max-width: 750px; border: 2px solid #FFEB70; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.15);"/>
    <figcaption style="font-size: 0.95em; color: #666; margin-top: 10px;"><em>LMTokenCook's intuitive interface, ready to process your data (macOS version shown, Windows is nearly identical).</em></figcaption>
  </figure>
</div>

---

## 📖 Overview: Unleash Your AI's Full Contextual Power

**LMTokenCook** is an indispensable utility for AI power-users, data scientists, researchers, writers, and developers who work extensively with web interface–based Large Language Models (LLMs) such as Google's Gemini family, OpenAI's GPT-4 series (including GPT-4o), and Anthropic's Claude models.

Modern LLMs often boast enormous context capabilities (e.g., 1 million to 2 million tokens or more via their APIs), allowing them to "remember" and process vast amounts of information for unparalleled coherence and depth. However, a common frustration arises: their publicly accessible **web interfaces** frequently impose much stricter *per-prompt input limits* (e.g., typically ranging from ~32,000 to ~128,000 tokens, and sometimes less). This creates "The Context Gap" – the 1M token promise versus the 60k prompt reality. How do you provide the *full context* of a large codebase, an entire novel, extensive research documentation, or lengthy transcripts to the LLM if you can't paste it all in one go?

**LMTokenCook is your sophisticated solution.** It elegantly bridges this gap for users who rely on web interfaces rather than direct API access. It systematically processes your local file collections (text, code, documents) and transforms them into LLM-ready input:

1.  **🔎 Intelligent Scanning & Consolidation:** LMTokenCook meticulously traverses your selected directory or individual files. It identifies relevant text-based content from a wide array of supported formats (including `.txt`, `.md`, `.py`, `.js`, `.java`, `.c`, `.cpp`, `.html`, `.css`, `.json`, `.xml`, `.docx`, `.pdf` [text layer], `.ipynb`, and many more), while safely skipping binary files, archives, media, and common exclusion folders (like `.git`, `.venv`, `node_modules`).
2.  **📚 Structured & Enhanced Output:** All extracted text is compiled into a single, meticulously structured data stream. This stream ingeniously begins with a **complete file hierarchy map** of your input, providing the LLM with an "index" or "table of contents" to your data. Following this map, each file's content is then clearly delineated with its full path and an estimated token count, enabling the LLM to understand the origin and scope of each piece of information.
3.  **🔪 Precision "Serving" Division:** This is where LMTokenCook truly shines. It automatically and intelligently divides the consolidated content into manageable **"servings"** (e.g., `serving_001_of_015.txt`). Each serving is precisely sized according to a token limit *you* specify, perfectly tailored for sequential pasting into your target AI's prompt window. Instructional comments are embedded within each serving to guide both you and the LLM through the process.
4.  **💡 Enables True Context Augmented Generation (CAG):** By feeding these servings one after another into the LLM's interface – following the simple instructions LMTokenCook provides – you can effectively saturate the LLM's available context window, even if it takes multiple prompts. This ensures the AI operates with the *complete* background information necessary for generating high-quality, contextually aware, and deeply informed responses.

LMTokenCook empowers you to leverage the full cognitive power of your AI subscriptions, transforming frustrating input limits into manageable, strategic steps. The output is clean, token-efficient plain text, designed for maximum compatibility and optimal recall by the LLM. **Stop underutilizing your AI – let LMTokenCook prepare the contextual feast!**

---

## ✨ Key Features: Your AI Preparation Kitchen

LMTokenCook is packed with features meticulously designed to make your interaction with LLMs more productive, powerful, and insightful:

*   **🖥️ Cross-Platform & Intuitive GUI:**
    A sleek, modern, and user-friendly graphical interface built with CustomTkinter. Features an aesthetically pleasing dark theme with vibrant yellow accents, ensuring a comfortable experience during extended use. Natively supports macOS (Universal Binary for Apple Silicon & Intel) and Windows (Installer & Portable versions).

*   **📁 Flexible Input Methods:**
    Effortlessly select input directories or individual files using a standard system file browser. For added convenience, **drag-and-drop** functionality is supported for quickly adding your target content.

*   **💾 Organized Timestamped Output:**
    Each processing run automatically creates a unique, timestamped subfolder within your chosen main output directory (e.g., `Output_YYYY-MM-DD_HH-MM-SS`). This keeps your results clearly separated, organized, and easy to locate, preventing accidental overwrites and facilitating version control.

*   **🧐 Intelligent & Comprehensive File Scanning:**
    Recursively scans directories, identifying and processing files based on an extensive, extensible list of text, code, and document extensions (see `lmtokencook/scanner.py` for the full, up-to-date list). It intelligently and safely skips binary files, common archives (like `.zip`, `.tar.gz`), media files (images, audio, video), symbolic links, and common exclusion folders (e.g., `.git`, `.venv`, `node_modules`, `__pycache__`), ensuring only relevant textual data is processed.

*   **📝 Robust Text Extraction from Diverse Formats:**
    Leverages dedicated, robust libraries for reliable content extraction:
    *   **Plain Text & Code:** Numerous formats including `.txt`, `.md`, `.py`, `.js`, `.java`, `.c`, `.cpp`, `.cs`, `.go`, `.rb`, `.php`, `.swift`, `.kt`, `.html`, `.css`, `.json`, `.xml`, `.yaml`, `.sh`, `.bat`, and more.
    *   **Microsoft Word (`.docx`):** Utilizes `python-docx` for best-effort text extraction from modern Word documents.
    *   **PDF (`.pdf`):** Employs `pypdf` for best-effort text extraction from PDF files that contain a text layer. **Note:** LMTokenCook does *not* perform Optical Character Recognition (OCR) on image-only PDFs. (PDF support is continuously being refined).
    *   **Jupyter Notebooks (`.ipynb`):** Intelligently processes notebooks to extract content from both code cells and markdown cells, preserving the textual information.

*   **🪙 Accurate Tokenization with `tiktoken`:**
    Employs OpenAI's official `tiktoken` library, specifically using the `cl100k_base` encoding. This encoding is widely used by models like the GPT-3.5/GPT-4 families and is also highly relevant for Google's Gemini models, ensuring that token counting and serving size calculations are accurate and practical for real-world use.

*   **🔗 Optimized Concatenation & Smart Formatting:**
    Efficiently processes and combines text streams from multiple files. Applies optional formatting (like line numbering or skipping empty lines) *before* writing the final output. Crucially, it clearly marks the beginning and end of each individual file's content within the consolidated stream using highly visible delimiters:
    ```
    === File Start: path/to/your/file.py ===
    [Content of file.py]
    === File End: path/to/your/file.py (Tokens: XXX) ===
    ```
    This structure helps the LLM differentiate between files and understand the source of specific information.

*   **📜 Optional Master File (`masterfile.t-XXXXX.txt`):**
    Gives you the choice to retain the full, concatenated `masterfile.t-XXXXX.txt` (where `XXXXX` reflects the *final* estimated total token count after all processing and formatting). Alternatively, you can opt to automatically discard it if only the token-based servings are needed, saving valuable disk space.

*   **🔢 Intelligent Token-Based Servings with Guidance:**
    If the total processed token count exceeds your specified "Serving Size (Max Tokens)" limit, the content is automatically divided into sequentially named `serving_XXX_of_YYY.txt` files (e.g., `serving_001_of_015.txt`). Each serving intelligently includes:
    *   Instructional comments at the beginning (e.g., `# [LMTokenCook] This is serving X of Y. Please wait for all servings before asking your main question.`) to guide your sequential input into the LLM interface and to inform the LLM about the multi-part nature of the context.
    *   A portion of the file hierarchy map at the start of the *first* serving.
    *   Careful splitting logic to avoid breaking words or critical syntax where possible.

*   **#️⃣ Optional Line Numbering:**
    Optionally prepend `NNNN ` (a 4-digit, zero-padded line number followed by a space) to every line of the output content. This is incredibly useful for precisely citing specific parts of the source material in your prompts, especially when working with code repositories or legal documents (e.g., "Refer to lines 0123-0145 in `src/utils/parser.py`...").

*   **🧹 Optional Skip Empty Lines:**
    Provides an option to remove completely blank lines (lines containing only whitespace) from the output. This can create denser, potentially more token-efficient content, especially useful when dealing with files that have inconsistent formatting.

*   **📊 Detailed Manifest (`manifest.json`):**
    Every processing run generates a comprehensive JSON report (`manifest.json`) in the output folder, providing full transparency, traceability, and diagnostic information:
    *   **Run Metadata:** Input/output paths, timestamp, all processing options selected by the user, final file counts (total scanned, processed, skipped, failed), total estimated tokens, and detailed serving information (if applicable).
    *   **Directory Structure:** A nested dictionary mirroring the scanned input directory, showing the processing status (`PROCESSED`, `SKIPPED_BINARY`, `SKIPPED_EXTENSION`, `ERROR_READING`, etc.) for each file and folder.
    *   **Processed File Details:** An ordered list for each successfully processed file, including its relative and absolute paths, character offsets in the final concatenated stream (useful for programmatic analysis), character count, *final* estimated token count for that file, the extraction status/method, and the encoding used.

*   **⏳ Responsive User Interface (Background Threading):**
    Utilizes background threading and a queue system to ensure the GUI remains interactive and responsive during potentially long-running file scanning, text extraction, tokenization, and output writing processes. Provides real-time progress updates via a progress bar and status messages in the log area. A "Cancel" button is available to gracefully halt ongoing operations.

*   **⚙️ Configuration Persistence (`config.json`):**
    LMTokenCook remembers your last-used output folder path and serving size setting in a `config.json` file. This file is stored in the standard user application configuration directory (via the `appdirs` library), making subsequent uses faster and more convenient.

---

## 💡 Understanding the AI Playground: Tokens, Context, Prompts & Models

To maximize LMTokenCook's value, it's crucial to understand how Large Language Models (LLMs) "think" about text. Here’s a quick primer:

*   **🤖 What are LLMs?**
    Think of models like **Google Gemini** (1.0 Pro, 1.5 Flash/Pro, upcoming 2.0 Ultra), **OpenAI's ChatGPT series** (GPT-3.5, GPT-4, GPT-4 Turbo, GPT-4o), **Anthropic's Claude family** (Claude 2, Claude 3 Haiku/Sonnet/Opus), **Mistral AI's models** (Mistral 7B, Mixtral 8x7B, Mistral Large), and **Meta's Llama series** as highly advanced pattern-matching and text-generation engines. Trained on colossal datasets, they learn the structure, nuances, and information within human language and code, allowing them to perform tasks like summarization, translation, coding, conversation, and complex reasoning.

*   **🪙 What are Tokens?**
    LLMs don't process text character-by-character or even strictly word-by-word. They break input text into **tokens**. A token is the fundamental unit the model "sees" and processes. It could be a whole word (`"language"`), a common part of a word (e.g., `"token"`, `"iza"`, `"tion"` forming "tokenization"), a single character (`"a"`), punctuation (`.`, `?`), or even whitespace. This **tokenization** process uses specific algorithms (like Byte Pair Encoding (BPE), WordPiece, or SentencePiece).
    **Key Takeaway:** Model limits (context windows, prompt inputs) and API costs are almost always based on *token counts*, not raw character or word counts. Different languages also tokenize with varying efficiency (e.g., English is generally more token-efficient than some other languages). LMTokenCook uses OpenAI's `tiktoken` with the `cl100k_base` encoding, which aligns well with many current high-performance models, making its serving size calculations highly relevant and practical.

*   **🧠 What is a Context Window (or Context Length)?**
    This is the model's **total working memory**, measured in tokens. It represents the maximum span of text (including your input prompt, any preceding conversation turns you provide as history, and sometimes the model's own generated output for that turn) that the model can reference *simultaneously* when generating its next response. A larger context window generally allows for greater coherence over long interactions, deeper understanding of complex documents, and more nuanced reasoning. However, processing larger contexts demands significantly more computational resources, potentially increasing cost and latency. Leading models now offer context windows ranging from 32k tokens up to 1 or 2 million tokens (though the full extent is often more accessible via APIs than web UIs).

*   **✍️ What is a Prompt/Input Limit?**
    This is often the more immediate practical constraint, especially when using **web interfaces**. It's the **maximum number of tokens you can actually submit** in a *single* prompt or message to the LLM. This limit is frequently **much smaller** than the model's total theoretical context window. For example, while Gemini 1.5 Pro boasts a 1M token context window, its web interface might limit a single *text input* to around 60,000-128,000 tokens (file uploads can sometimes bypass this direct text limit but still count towards the overall context). These limits exist for performance optimization, cost control on the provider's side, and user interface usability reasons.
    **LMTokenCook's "Serving Size (Max Tokens)" setting should be based on this Prompt/Input Limit of your target web interface**, leaving sufficient headroom for your own instructions/questions and the model's anticipated response length. LMTokenCook helps you overcome this input limit by segmenting your large context into these manageable servings.

*   **📊 Major Models & Approximate Web Interface Limits (Illustrative - Q2 2025):**
    > **Disclaimer:** LLM capabilities and interface limits change *rapidly*! Always verify with the specific platform's official documentation and your subscription tier. These estimates focus on direct text input in primary web chat interfaces and are for general guidance. File upload mechanisms may have different effective limits.

    | Model Family (Provider)        | Specific Models (Examples)             | Max Context Window (Model Capability) | Typical *Web Interface* Prompt/Input Limit (Direct Text) | Typical Max Output Limit (Web UI) | Common Web Interface Access Points                                           |
    | :----------------------------- | :------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ | :-------------------------------------------------------------------- |
    | **OpenAI GPT Series**        | GPT-4, GPT-4 Turbo, GPT-4o           | 128k tokens (some variants more)      | **Highly Tier-Dependent:** <br/> Free Tier (often GPT-3.5/limited GPT-4o): ~8k-16k tokens? <br/> Paid Tiers (Plus/Team using GPT-4/4o): Often ~32k-64k practical input, though model sees up to 128k with history. File uploads can leverage more. | ~4k-8k tokens (can be higher) | `chat.openai.com`                                                       |
    | **Google Gemini Series**     | Gemini 1.0 Pro, 1.5 Flash, 1.5 Pro   | 32k - 1M+ tokens (1.5 Pro)          | **Varies by Interface & Tier:** <br/> `gemini.google.com` (1.0 Pro/1.5 Flash): ~30k-60k tokens? <br/> Gemini Advanced (1.5 Pro): ~60k-128k+ tokens for direct text. File uploads can use much more of the 1M context. <br/> Google AI Studio: Can allow larger inputs, closer to API limits for 1.5 Pro. | ~8k-32k tokens (varies)   | `gemini.google.com`, `aistudio.google.com`, Google Workspace Integrations |
    | **Anthropic Claude Series**  | Claude 3 Haiku, Sonnet, Opus         | 200k+ tokens                        | **Tier-Dependent:** <br/> Free Tier: Significantly limited, perhaps ~10k-20k tokens direct input. <br/> Pro Tier: Much higher, potentially up to ~150k-180k tokens for direct pasting. File uploads are very effective for larger contexts. | ~4k-8k tokens (can be higher) | `claude.ai`                                                             |
    | **Mistral AI Series**        | Mistral 7B, Mixtral 8x7B, Large      | 32k - 128k+ tokens                    | **Varies Greatly by Platform:** Mistral itself doesn't have a single dominant public web UI. Limits heavily depend on the third-party host (e.g., Perplexity, Hugging Chat, etc.) and could range from ~4k to 32k+ tokens for direct input. | ~4k-8k tokens             | Primarily via Third-party platforms or specific partner integrations. |

---

## ❗ Mandatory Reading: Maximize Success, Minimize Surprises

Before you dive in, please internalize these crucial points for optimal and safe usage:

*   🎯 **Set Serving Size Wisely:** Base your "Serving Size (Max Tokens)" in LMTokenCook on the **Prompt/Input Limit** of your target LLM web interface (refer to the table above or the LLM's official documentation), *not* its maximum theoretical context window.
    *   **Crucially, leave ample headroom!** For example, if an interface allows ~60,000 tokens input, set LMTokenCook's serving size to perhaps `55000` or even `50000`. This buffer is essential for:
        1.  Your own instructional prompts (e.g., "Here is part X of the context. Once all parts are loaded, I will ask you to...")
        2.  The LLM's response (it needs "space" in the context window to generate its answer).
        3.  Potential minor discrepancies in tokenization between `tiktoken` and the specific model's internal tokenizer.
    *   Too large a serving might get truncated by the interface or leave no room for your actual query.

*   📄 **Extraction Quality is Best-Effort:** Text extraction from complex formats like PDF and DOCX is a best-effort process.
    *   **PDFs:** Relies on a proper text layer. Image-only PDFs or heavily scanned documents without OCR will yield little to no text. Complex layouts, tables, or multi-column text might not extract perfectly.
    *   **DOCX:** Formatting, embedded objects, and complex table structures can sometimes affect text flow or completeness.
    *   Always review the `manifest.json` file for any errors or warnings related to file processing. For critical documents, a quick visual scan of the output `.txt` files is advisable.

*   🪙 **Token Estimates are Estimates:** LMTokenCook uses `tiktoken` (`cl100k_base`), which is highly accurate for many models. However, the *exact* token count an LLM assigns internally can sometimes vary slightly due to proprietary tokenizer implementations or minor version differences. The headroom advice for serving size helps mitigate this. Servings might also slightly exceed the specified limit if a very long, unbreakable line of text (e.g., a minified code line or a long URL) is encountered at the split point, as LMTokenCook prioritizes not breaking such lines mid-token where feasible.

*   🔒 **Privacy & Security – Understand Your Data Flow:**
    *   **LMTokenCook itself runs 100% locally on your computer.** It does not transmit your files or their content over the internet during processing.
    *   **HOWEVER, the ultimate destination of the generated `.txt` servings is a third-party LLM service (e.g., ChatGPT, Gemini, Claude).** When you copy and paste the content into these services, you are subject to *their* data usage policies, privacy terms, and security measures.
    *   **Do NOT process highly sensitive, confidential, or classified information with LMTokenCook if you are not comfortable with that information being handled by the LLM provider you intend to paste it into.** Always review the data usage policies of the LLM service you are using. DropShock Digital LLC is not responsible for data handling by third-party LLM providers.

---

## 💾 Installation: Get Cooking in Minutes!

LMTokenCook is designed for easy setup on both Windows and macOS.

### For Most Users: Packaged Applications (Recommended)

No Python installation or command-line knowledge needed!

#### 🪟 Windows Installation

Choose either the Installer or Portable version:

1.  **Download:**
    *   **Installer:** `LMTokenCook_Installer.exe` from the [Releases Page](https://github.com/seagpt/LMTokenCook/releases/latest).
    *   **Portable:** `LMTokenCook_Portable.zip` from the [Releases Page](https://github.com/seagpt/LMTokenCook/releases/latest).
2.  **Run/Extract:**
    *   **Installer:** Double-click the downloaded `.exe`.
        *   **Windows Defender SmartScreen:** If a "Windows protected your PC" prompt appears (common for new, unsigned apps), click "**More info**", then verify the app name and click "**Run anyway**".
        *   Follow the on-screen installer prompts (accept license, choose install location, etc.).
    *   **Portable:** Extract the contents of the `.zip` file to a folder of your choice (e.g., `C:\Program Files\LMTokenCook` or `D:\PortableApps\LMTokenCook`).
3.  **Launch:**
    *   **Installer:** From your Start Menu or Desktop shortcut.
    *   **Portable:** Double-click `LMTokenCook.exe` in the folder where you extracted it. (SmartScreen prompt might appear on first run here too; follow same steps).

#### 🍎 macOS Installation

1.  **Download:** `LMTokenCook.dmg` from the [Releases Page](https://github.com/seagpt/LMTokenCook/releases/latest).
2.  **Mount & Install:**
    *   Double-click the downloaded `.dmg` file to mount it. A Finder window will open.
    *   Drag the `LMTokenCook.app` icon into your `/Applications` folder.
    *   You can now eject the mounted "LMTokenCook" disk image from Finder.
3.  **First Launch (Important Security Step):**
    *   Navigate to your `/Applications` folder.
    *   **Right-click** (or Ctrl-click) on the `LMTokenCook.app` icon and select "**Open**" from the context menu.
    *   A dialog may appear warning that "macOS cannot verify the developer..." or that the app is from an "unidentified developer." Click "**Open**" in this dialog.
    *   *Alternative:* If the above doesn't work, go to **System Settings > Privacy & Security**. Scroll down to the "Security" section. You should see a message about "LMTokenCook.app was blocked..." Click the "**Open Anyway**" button. You may need to enter your Mac user password.
    *   This security override is typically only needed for the very first launch. Subsequent launches can be done by double-clicking the app icon as usual.

### For Developers: Running from Source

If you prefer to run from the source code or wish to contribute:

1.  **Prerequisites:**
    *   Python 3.8 or newer.
    *   `pip` (Python package installer).
    *   `Git` (for cloning the repository).
2.  **Get the Code:**
    ```bash
    git clone https://github.com/seagpt/LMTokenCook.git
    cd LMTokenCook
    ```
3.  **Set Up a Virtual Environment (Highly Recommended):**
    *   Create: `python -m venv venv`
    *   Activate:
        *   Windows (CMD): `venv\Scripts\activate.bat`
        *   Windows (PowerShell): `.\venv\Scripts\Activate.ps1` (May require `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process` first)
        *   macOS/Linux (Bash/Zsh): `source venv/bin/activate`
    Your terminal prompt should now show `(venv)`.
4.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
5.  **Run the Application:**
    ```bash
    python lmtc_gui.py 
    ```
    (Or the main script name if `lmtc_gui.py` is not the entry point in your version).

---

## 📖 Usage Guide: From Raw Files to AI-Ready Servings

Using LMTokenCook is straightforward:

1.  **Launch LMTokenCook:** Open the application as installed.
2.  **Select Input Source:**
    *   Click the "**Browse Folder...**" button to select an entire directory for processing.
    *   Click the "**Browse File(s)...**" button to select one or more individual files.
    *   Alternatively, **drag and drop** your folder or file(s) directly onto the designated area in the GUI.
3.  **Select Output Parent Directory:**
    *   Click the "**Browse...**" button next to "Output Parent Directory". Choose a base location where LMTokenCook will create its timestamped subfolder for this run's results.
4.  **Set Serving Size (Max Tokens):**
    *   Enter the maximum number of tokens you want each `serving_XXX_of_YYY.txt` file to contain.
    *   **Crucial:** Base this on your target LLM's **web interface prompt input limit**, leaving headroom (see "Mandatory Reading" section).
    *   If you enter `0` or leave this field blank, LMTokenCook will not create servings and will only produce the `masterfile.txt` (if "Keep Master File" is checked).
5.  **Choose Processing Options:**
    *   ✅ **Keep Master File:** Check this if you want to retain the `masterfile.t-XXXXX.txt` which contains all concatenated content. Uncheck to save disk space if you only need the servings.
    *   ✅ **Add Line Numbers:** Check to prepend `NNNN ` to each line of output.
    *   ✅ **Skip Empty Lines:** Check to remove completely blank lines from the output.
6.  **Start Processing:**
    *   Click the prominent "**Start Processing**" button.
7.  **Monitor Progress:**
    *   Watch the **Status Log** area for real-time updates on what LMTokenCook is doing (scanning files, extracting text, tokenizing, writing output).
    *   The **Progress Bar** will indicate overall progress.
    *   The "**Cancel**" button can be used to gracefully stop the current processing job if needed.
8.  **Completion & Accessing Results:**
    *   Wait for the status message to indicate successful completion (e.g., "[SUCCESS] Processing complete! Output saved to: ...").
    *   Click the "**Open Output Folder**" button. This will open your system's file explorer directly to the unique, timestamped output subfolder created for this run.
    *   Inside, you'll find:
        *   `manifest.json` (the detailed report).
        *   `masterfile.t-XXXXX.txt` (if "Keep Master File" was checked).
        *   `serving_001_of_YYY.txt`, `serving_002_of_YYY.txt`, etc. (if total tokens exceeded your serving size).

9.  **Feed to Your LLM (Context Augmented Generation Workflow):**
    This is the key step to leverage LMTokenCook's output effectively.
    *   **If using `masterfile.txt` (for smaller total contexts that fit in one prompt):**
        1.  Open `masterfile.txt`.
        2.  Copy its entire content.
        3.  Paste into your LLM's prompt window.
        4.  Add your question or task directly after the pasted content.
    *   **If using `serving_XXX_of_YYY.txt` files (for large contexts):**
        1.  **Prompt 1 (First Serving):**
            *   Open `serving_001_of_YYY.txt`.
            *   Copy its entire content.
            *   Paste into your LLM's prompt window. You might add a brief intro like:
                `"I'm about to provide a large amount of context in several parts. This is part 1 of YYY. Please acknowledge you've received this part and are ready for the next. Do not summarize or analyze yet."`
            *   Send the prompt. Wait for the LLM's confirmation.
        2.  **Prompt 2 to YYY-1 (Intermediate Servings):**
            *   Open the next serving file (e.g., `serving_002_of_YYY.txt`).
            *   Copy its content.
            *   Paste into the LLM. You might say:
                `"Here is part X of YYY. Please acknowledge."`
            *   Send. Wait for confirmation. Repeat for all intermediate servings.
        3.  **Prompt YYY (Final Serving & Your Actual Question):**
            *   Open the last serving file (e.g., `serving_YYY_of_YYY.txt`).
            *   Copy its content.
            *   Paste into the LLM. Now, add your actual question or task *after* this final piece of context:
                `"Here is the final part, YYY of YYY. [Paste content of serving_YYY_of_YYY.txt] Now that you have all the context, please [Your actual, detailed question or task, e.g., 'summarize the main arguments presented in the provided research papers', 'refactor the Python codebase to improve performance, focusing on the classes defined in src/core/', 'write a story based on the provided character backstories']." `
            *   Send. The LLM should now process your request using the full context you've supplied across multiple turns.

    <div align="center" style="margin-top: 20px; margin-bottom: 20px;">
      <figure>
        <img src="assets/working-example.png" alt="Working Example: Gemini receiving multiple LMTokenCook servings" width="60%" style="max-width: 600px; border: 1px solid #FFEB70; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>
        <figcaption style="font-size: 0.9em; color: #666; margin-top: 8px;"><em>Example: Sequentially pasting LMTokenCook servings into Google Gemini, enabling analysis of content far exceeding single prompt limits.</em></figcaption>
      </figure>
    </div>

---

## ⚙️ Configuration Persistence (`config.json`)

LMTokenCook aims to make your life easier by remembering some of your settings between sessions:

*   **Configuration File:** `config.json`
*   **Storage Location:** LMTokenCook uses the `appdirs` library to store this file in the standard user application configuration directory for your operating system:
    *   **Windows:** `C:\Users\<YourUsername>\AppData\Roaming\LMTokenCook\LMTokenCook\config.json`
    *   **macOS:** `/Users/<YourUsername>/Library/Application Support/LMTokenCook/config.json`
    *   **Linux (if built from source):** `/home/<YourUsername>/.config/LMTokenCook/config.json`
*   **Settings Remembered:**
    *   `last_output_dir`: The path to the last parent output directory you selected.
    *   `last_serving_size`: The last serving size (max tokens) you entered.
    *   `last_keep_masterfile_bool`: True/False for "Keep Master File"
    *   `last_add_line_numbers_bool`: True/False for "Add Line Numbers"
    *   `last_skip_empty_lines_bool`: True/False for "Skip Empty Lines"
*   **Resetting to Defaults:** If you wish to reset these saved preferences, simply delete the `config.json` file. LMTokenCook will create a new one with default values the next time it starts.

---

## 🧾 Manifest File (`manifest.json`) Deep Dive

For every processing run, LMTokenCook generates a `manifest.json` file in the output subfolder. This file is a goldmine of information, offering complete transparency and traceability for your data preparation process. It's structured as follows:

```json
{
  "metadata": {
    "app_version": "1.x.x",
    "run_timestamp_utc": "YYYY-MM-DDTHH:MM:SS.ffffffZ",
    "input_source_type": "directory" / "files",
    "input_paths": ["/path/to/source1", "/path/to/source2"],
    "output_path_run_specific": "/path/to/output/Output_YYYY-MM-DD_HH-MM-SS",
    "options": {
      "serving_size_tokens": 50000,
      "keep_master_file": true,
      "add_line_numbers": false,
      "skip_empty_lines": true
    },
    "file_counts": {
      "total_scanned_files": 150,
      "total_scanned_dirs": 20,
      "files_processed": 120,
      "files_skipped_binary_or_media": 20,
      "files_skipped_unsupported_ext": 5,
      "files_skipped_empty": 3,
      "files_failed_extraction": 2
    },
    "tokenization_details": {
      "tokenizer_name": "cl100k_base",
      "total_estimated_tokens": 1234567
    },
    "serving_output": {
      "servings_created": true / false,
      "number_of_servings": 25,
      "tokens_per_serving_target": 50000,
      "master_file_created": true / false,
      "master_file_name": "masterfile.t-1234567.txt" (if created)
    }
  },
  "directory_structure": {
    // Nested dictionary mirroring the input folder structure,
    // with status for each file/folder. Example:
    "my_project_root": {
      "type": "directory",
      "status": "SCANNED",
      "files": {
        "main.py": {"type": "file", "status": "PROCESSED", "reason": ""},
        "README.md": {"type": "file", "status": "PROCESSED", "reason": ""}
      },
      "sub_dir": {
        "type": "directory",
        "status": "SCANNED",
        "files": {
          "image.jpg": {"type": "file", "status": "SKIPPED_MEDIA", "reason": "Binary image file"},
          "data.bin": {"type": "file", "status": "SKIPPED_BINARY", "reason": "Likely binary content"}
        }
      }
    }
  },
  "processed_files_summary": [
    // Ordered list of successfully processed files. Example:
    {
      "id": 1,
      "relative_path": "my_project_root/main.py",
      "absolute_path": "/full/path/to/my_project_root/main.py",
      "char_count_original": 5020,
      "char_count_processed": 5000, // After skipping empty lines, etc.
      "estimated_tokens": 1234,
      "extraction_method": "text/plain",
      "encoding_detected": "utf-8",
      "processing_status": "PROCESSED_OK"
    },
    // ... more files
  ],
  "error_log_summary": [
      // List of files that had issues. Example:
      {
          "relative_path": "my_project_root/corrupted.docx",
          "absolute_path": "/full/path/to/my_project_root/corrupted.docx",
          "error_message": "Failed to extract text: Document is corrupted or password-protected."
      }
  ]
}
```
This detailed manifest is invaluable for:
*   Verifying which files were included or excluded.
*   Understanding the token impact of individual files.
*   Debugging issues with text extraction.
*   Programmatic analysis of your corpus preparation.

---

## 🛠️ Technical Details & Development Insights

*   **Core Architecture:** LMTokenCook is built with Python (3.8+) and utilizes the [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter) library for its modern, themeable graphical user interface.
*   **Responsive Processing:** It employs Python's `threading` and `queue.Queue` modules to perform intensive file I/O, text extraction, tokenization (`tiktoken`), and output writing operations in background threads. This ensures the GUI remains responsive and provides real-time progress updates even when processing large datasets.
*   **Efficient Content Handling:** The processing pipeline is designed to handle content modifications (line numbering, skipping empty lines) efficiently before generating the final output stream(s), minimizing memory footprint where possible.
*   **Development Environment:** A significant portion of LMTokenCook was developed using Python directly within the **Windsurf IDE**. Windsurf, an AI-centric fork of VS Code developed by Steven Seagondollar, facilitated the use of advanced AI models for coding assistance, debugging, and feature ideation. Notably, **OpenAI's GPT-4 models (including early access to variants like GPT-4.1 via API through Windsurf) were instrumental in accelerating development and refining the application's logic.**
*   **Key Dependencies:** Python 3.8+, `customtkinter`, `Pillow` (for image handling in GUI assets), `tiktoken`, `tkinterdnd2` (for drag-and-drop), `python-docx` (for `.docx`), `pypdf` (for `.pdf`), `appdirs` (for config file location). *(See `requirements.txt` in the source repository for specific versions used in development.)*
*   **Distribution:** Standalone applications for Windows and macOS are created using [PyInstaller](https://pyinstaller.org/), bundling all necessary dependencies.

---

## 🌟 Steven Seagondollar & DropShock Digital LLC: Professional Overview

This section provides insight into the developer and the company behind LMTokenCook.

### Steven Seagondollar

Steven Seagondollar, the founder of DropShock Digital LLC, is a professional who operates at the intersection of advanced technology and digital creativity.

*   **Technological Proficiencies:** Steven possesses a strong and rapidly developing expertise in cutting-edge computational methods. His skills encompass the design, development, and application of intelligent systems, as well as a deep understanding of computer architecture and network infrastructure.
*   **Digital Development:** Steven is actively expanding his capabilities in building complex online applications and platforms. His skillset includes various programming languages, web development technologies, and database management.
*   **Creative Production:** Steven demonstrates mastery in a range of digital creative fields. This includes visual content creation, digital media production, and the design and management of online presences.
*   **Business & Leadership Acumen:** Steven has a proven track record in:
    *   Managing complex projects and programs.
    *   Designing and implementing operational frameworks.
    *   Leading and mentoring teams.
    *   Developing and executing revenue strategies.
    *   Providing strategic business guidance.
    *   Managing client relationships and communication.
    *   Entrepreneurial ventures and business development.
*   **Communication & Interpersonal Skills:** Steven exhibits strong abilities in:
    *   Communicating complex information clearly and effectively.
    *   Adapting his communication style to different contexts.
    *   Facilitating learning and knowledge transfer.
    *   Collaborating with others in a professional setting.

### DropShock Digital LLC

DropShock Digital LLC provides a suite of digital solutions, emphasizing the use of advanced technologies.

*   **Intelligent Systems:** The company focuses on developing and implementing intelligent systems to improve digital processes and user interactions.
*   **Digital Media:** DropShock Digital offers expertise in creating digital media and visual content.
*   **Digital Platforms:** The company designs and builds digital platforms and online infrastructures.
*   **Strategic Consulting:** DropShock Digital provides strategic guidance to help businesses leverage digital tools and strategies.

DropShock Digital LLC is committed to delivering innovative and effective digital solutions by integrating technical expertise with a focus on client needs.

---

## ❓ Troubleshooting / FAQ

Encountering an issue? Check these common questions first. For persistent problems, refer to the "Support & Contact" section.

1.  **`ModuleNotFoundError` (when running from source):**
    *   **Cause:** Python dependencies not installed or virtual environment (`venv`) not active.
    *   **Solution:** Ensure `venv` is active (see "Running from Source") and run `pip install -r requirements.txt`. If packaged, try reinstalling the application.

2.  **Application is Unresponsive or Hangs:**
    *   **Cause:** Processing very large files or a huge number of files can take time, even with background threading. It might also indicate an unexpected error.
    *   **Solution:** Allow sufficient time for heavy I/O operations. Check the status log in the GUI for any messages. If it remains unresponsive for an unusually long time, you may need to force quit. Check the `manifest.json` (if created) or console logs (if running from source) for error clues. Report persistent hangs as bugs on GitHub with as much detail as possible.

3.  **Issues with PDF or DOCX Text Extraction (Empty or Partial Output):**
    *   **Cause:**
        *   **PDF:** File may be image-only (scanned, no text layer - LMTokenCook doesn't do OCR), password-protected, encrypted, or have a very complex/non-standard layout. The `pypdf` library does its best but has limitations.
        *   **DOCX:** File may be corrupted, password-protected, an older `.doc` format (not `.docx`), or contain highly complex embedded objects or formatting that `python-docx` struggles with.
    *   **Solution:** Check the `manifest.json` for specific error messages related to the file. Try opening and re-saving the problematic file in its native application (e.g., Adobe Acrobat, Microsoft Word) to a standard format. For image-only PDFs, you'll need an external OCR tool to convert them to text-selectable PDFs first.

4.  **Token Counts or Serving Sizes Seem Slightly Off:**
    *   **Cause:** As mentioned in "Mandatory Reading," `tiktoken` counts are highly accurate estimates, but minor variations can occur with an LLM's specific internal tokenizer. Also, LMTokenCook tries not to break very long single lines (like minified code or URLs) mid-token, which might cause a serving to slightly exceed the target if such a line falls at a split point.
    *   **Solution:** The "headroom" you leave when setting your serving size is designed to accommodate these minor variations. Always check the `manifest.json` for the final token counts if precision is critical for analysis.

5.  **How to Reset Saved Settings (Last Output Path, Serving Size)?**
    *   **Solution:** Delete the `config.json` file. See the "Configuration (`config.json`)" section for its location on your OS. LMTokenCook will create a new one with defaults on its next launch.

6.  **Drag-and-Drop Not Working:**
    *   **Cause:** Relies on the `TkinterDnd2` library, which is generally robust but can occasionally have OS-specific quirks or conflicts with other software.
    *   **Solution:** Always use the "Browse Folder..." or "Browse File(s)..." buttons as the primary and most reliable method for selecting input. If running from source on Linux, `TkinterDnd2` might require manual installation of `tkdnd` library system-wide.

7.  **"Permission Denied" Errors when Selecting Output Folder or During Processing:**
    *   **Cause:** Your user account may lack write permissions to the selected output parent directory or one of its subdirectories. Antivirus software could also interfere.
    *   **Solution:** Choose an output directory where your user account has full read/write permissions (e.g., your Documents folder, Desktop, or a dedicated projects folder). Ensure your antivirus isn't blocking LMTokenCook's write operations.

---

## 🤝 Contributing & Special Thanks

Contributions, bug reports, and feature suggestions are warmly welcome! Please use the [**GitHub Issues**](https://github.com/seagpt/LMTokenCook/issues) page for the project to:
*   Report bugs (please include OS, LMTokenCook version, steps to reproduce, and `manifest.json` if relevant).
*   Suggest new features or enhancements.
*   Ask questions if the README or existing issues don't cover them.

**Special Thanks To:**

*   **Garrett Montagne:** For invaluable technical assistance in resolving complex `tiktoken` dependency issues and cross-platform packaging challenges for both Windows and macOS. His expertise significantly improved build reliability and provided crucial troubleshooting support during critical development phases.

---

## 🙏 Acknowledgements: Standing on the Shoulders of Giants

LMTokenCook leverages the power of the Python ecosystem and several key open-source libraries. Our sincere gratitude to their developers and maintainers:

*   **[Python](https://www.python.org/)**: The versatile and powerful language that forms the foundation.
*   **[CustomTkinter](https://github.com/TomSchimansky/CustomTkinter)**: For the beautiful and modern themed Tkinter GUI widgets.
*   **[OpenAI Tiktoken](https://github.com/openai/tiktoken)**: For accurate and efficient token counting.
*   **[pypdf](https://github.com/py-pdf/pypdf)**: For PDF text extraction capabilities.
*   **[python-docx](https://github.com/python-openxml/python-docx)**: For `.docx` file reading.
*   **[Appdirs](https://github.com/ActiveState/appdirs)**: For locating appropriate user-specific configuration directories.
*   **[TkinterDnd2](https://github.com/python-tkdnd/tkdnd/)**: For enabling drag-and-drop functionality in the GUI.
*   **[Pillow (PIL Fork)](https://python-pillow.org/)**: For image manipulation (used for GUI assets).
*   **[PyInstaller](https://pyinstaller.org/)**: For packaging LMTokenCook into standalone applications.

---

## 🛟 Need Help? Support & Contact Information

Your experience with LMTokenCook is important to us. If you encounter any issues, bugs, security concerns, or have questions that aren't addressed in this README, please reach out. Your feedback is essential for the reliability, security, and ongoing improvement of this tool.

**How to Contact DropShock Digital LLC for Support:**

*   **Preferred Method (Email):**
    [support@dropshockdigital.com](mailto:support@dropshockdigital.com?subject=LMTokenCook%20Support%2FFeedback)
*   **Business Inquiries & Direct Contact (Phone):**
    +1 (760) 209-5480 (Please note this is a US number; email is preferred for initial technical support)
*   **Project Website & Company Information:**
    [https://www.dropshockdigital.com](https://www.dropshockdigital.com)
*   **GitHub Issues (for public bug reports & feature requests):**
    [https://github.com/seagpt/LMTokenCook/issues](https://github.com/seagpt/LMTokenCook/issues)

**When contacting support, please try to include as much detail as possible:**
*   Your Operating System and version (e.g., Windows 11 Pro v23H2, macOS Sonoma 14.3).
*   The version of LMTokenCook you are using (from the app title bar or release notes).
*   Clear, step-by-step instructions to reproduce the issue.
*   Any error messages shown in the GUI or console.
*   Screenshots of the application state or error messages.
*   The relevant `manifest.json` file (if the issue relates to a specific processing run).

**Privacy & Security of Your Support Requests:**
All support requests made directly to DropShock Digital LLC via email or phone are handled with confidentiality. We aim to respond to all inquiries as promptly as possible.

Thank you for using LMTokenCook and for helping us make it an even better tool for the AI community!

---

## 📜 License

**LMTokenCook**
Copyright (c) 2024-2025 Steven Seagondollar, DropShock Digital LLC.

This project is licensed under the terms of the **MIT License**.
A copy of the license is included in the `LICENSE.md` file in the root of this project's source code repository.

**In brief, the MIT License grants you permission to:**
*   Freely use, copy, modify, and merge the software.
*   Publish, distribute, sublicense, and/or sell copies of the software.
*   Use the software for private or commercial purposes.

**The main conditions are:**
*   The original copyright notice (as above) and this permission notice must be included in all copies or substantial portions of the Software.
*   The software is provided "AS IS", without warranty of any kind. The authors or copyright holders are not liable for any claim, damages, or other liability.

Please review the full `LICENSE.md` text for complete details.
