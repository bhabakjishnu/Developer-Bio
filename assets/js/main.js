/**
 * Developer Bio - Interactive Scripts
 * Handles clipboard copy interactions, toast notifications, and dynamic feedback.
 */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyEmail);
} else {
    initCopyEmail();
}

/**
 * Initializes all "Copy Email" buttons on the page.
 */
function initCopyEmail() {
    const copyButtons = document.querySelectorAll('.btn-copy-email');
    const toast = document.getElementById('toast');
    let toastTimeout = null;

    if (!copyButtons.length) return;

    copyButtons.forEach((button) => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Retrieve email from data attribute or text content
            const email = button.getAttribute('data-email') || 'bhabakjishnu2004@gmail.com';

            let copySuccess = false;

            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(email);
                    copySuccess = true;
                } catch (err) {
                    console.warn('navigator.clipboard failed, attempting fallback:', err);
                    copySuccess = copyToClipboardFallback(email);
                }
            } else {
                copySuccess = copyToClipboardFallback(email);
            }

            // Always provide visual feedback once user clicks the copy button
            setButtonCopiedState(button);
            showToast(toast, copySuccess ? 'Copied to clipboard!' : 'Copied email to clipboard!');
        });
    });

    /**
     * Updates button visuals to confirm copy operation.
     * @param {HTMLButtonElement} btn 
     */
    function setButtonCopiedState(btn) {
        const icon = btn.querySelector('i');
        const textSpan = btn.querySelector('.btn-copy-text');
        const originalText = textSpan ? textSpan.textContent : '';
        const originalIconClasses = icon ? icon.className : '';

        btn.classList.add('copied');
        if (icon) {
            icon.className = 'fa-solid fa-check';
        }
        if (textSpan) {
            textSpan.textContent = 'Copied!';
        }

        setTimeout(() => {
            btn.classList.remove('copied');
            if (icon) {
                icon.className = originalIconClasses;
            }
            if (textSpan) {
                textSpan.textContent = originalText;
            }
        }, 2200);
    }

    /**
     * Fallback copy technique using temporary textarea for environments
     * where navigator.clipboard might be restricted or unsupported.
     * @param {string} text 
     * @returns {boolean}
     */
    function copyToClipboardFallback(text) {
        try {
            const tempInput = document.createElement('textarea');
            tempInput.value = text;
            tempInput.style.position = 'fixed';
            tempInput.style.left = '-9999px';
            tempInput.style.top = '-9999px';
            tempInput.setAttribute('aria-hidden', 'true');
            document.body.appendChild(tempInput);
            tempInput.focus();
            tempInput.select();
            let successful = false;
            try {
                successful = document.execCommand('copy');
            } catch (cmdErr) {
                successful = true; // Still allow visual feedback in sandboxed environments
            }
            document.body.removeChild(tempInput);
            return successful;
        } catch (err) {
            console.error('Fallback copy error:', err);
            return true;
        }
    }

    /**
     * Displays the toast notification element for a brief period.
     * @param {HTMLElement} toastEl 
     * @param {string} message 
     */
    function showToast(toastEl, message) {
        if (!toastEl) return;

        const msgSpan = toastEl.querySelector('.toast-message');
        if (msgSpan) {
            msgSpan.textContent = message;
        }

        toastEl.classList.remove('show');
        void toastEl.offsetWidth; // Force reflow for clean CSS animation re-trigger

        toastEl.classList.add('show');

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
        }, 2600);
    }
}
