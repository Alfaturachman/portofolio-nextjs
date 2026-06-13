import React from 'react';

const VOID_ELEMENTS = new Set(['br', 'hr', 'img', 'input']);

const ALLOWED_TAGS = new Set([
    'p',
    'a',
    'strong',
    'b',
    'em',
    'i',
    'code',
    'pre',
    'span',
    'br',
    'hr',
    'ul',
    'ol',
    'li',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'img',
    'blockquote',
]);

type TagToken = {
    type: 'tag';
    name: string;
    attrs: Record<string, string>;
    selfClosing: boolean;
    closing: boolean;
};

type TextToken = { type: 'text'; content: string };

type Token = TagToken | TextToken;

function tokenize(html: string): Token[] {
    const tokens: Token[] = [];
    const regex =
        /<\/?(\w+)((?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|\S+))?)*)\s*(\/?)>/g;
    let lastIndex = 0;

    while (lastIndex < html.length) {
        const match = regex.exec(html);
        if (!match) {
            tokens.push({ type: 'text', content: html.slice(lastIndex) });
            break;
        }

        if (match.index > lastIndex) {
            tokens.push({
                type: 'text',
                content: html.slice(lastIndex, match.index),
            });
        }

        const [, name, attrsStr, selfClose] = match;
        const isClosing = html[match.index + 1] === '/';

        if (isClosing) {
            tokens.push({
                type: 'tag',
                name: name.toLowerCase(),
                attrs: {},
                selfClosing: false,
                closing: true,
            } as TagToken);
        } else {
            const attrs: Record<string, string> = {};
            const attrRegex = /(\w+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/g;
            let attrMatch;
            while ((attrMatch = attrRegex.exec(attrsStr))) {
                attrs[attrMatch[1]] =
                    attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? '';
            }
            tokens.push({
                type: 'tag',
                name: name.toLowerCase(),
                attrs,
                selfClosing:
                    !!selfClose || VOID_ELEMENTS.has(name.toLowerCase()),
                closing: false,
            } as TagToken);
        }

        lastIndex = regex.lastIndex;
    }

    return tokens;
}

function buildTree(
    tokens: Token[],
    index = 0,
): { nodes: React.ReactNode[]; nextIndex: number } {
    const nodes: React.ReactNode[] = [];
    let i = index;

    while (i < tokens.length) {
        const token = tokens[i];

        if (token.type === 'text') {
            nodes.push(token.content);
            i++;
            continue;
        }

        if (token.closing || !ALLOWED_TAGS.has(token.name)) {
            break;
        }

        if (token.selfClosing) {
            const el = createElement(token, []);
            if (el) nodes.push(el);
            i++;
            continue;
        }

        const result = buildTree(tokens, i + 1);
        const el = createElement(token, result.nodes);
        if (el) nodes.push(el);
        i = result.nextIndex + 1;
    }

    return { nodes, nextIndex: i };
}

function createElement(
    token: TagToken,
    children: React.ReactNode[],
): React.ReactNode {
    const props: Record<string, any> = {};
    if (token.attrs.href) props.href = token.attrs.href;
    if (token.attrs.target) props.target = token.attrs.target;
    if (token.attrs.rel) props.rel = token.attrs.rel;
    if (token.attrs.class) props.className = token.attrs.class;
    if (token.attrs.id) props.id = token.attrs.id;
    if (token.attrs.src) props.src = token.attrs.src;
    if (token.attrs.alt) props.alt = token.attrs.alt;
    if (token.attrs.style) props.style = token.attrs.style;

    return React.createElement(
        token.name,
        Object.keys(props).length > 0 ? props : null,
        ...children,
    );
}

export default function SafeHtml({ html }: { html: string }) {
    const tokens = tokenize(html);
    const { nodes } = buildTree(tokens);
    return <>{nodes}</>;
}
