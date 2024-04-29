import{_ as t,c as s,o as i,a3 as a}from"./chunks/framework.Dr6XptFR.js";const g=JSON.parse('{"title":"TwButton","description":"","frontmatter":{"title":"TwButton"},"headers":[],"relativePath":"widgets/tw-button.md","filePath":"widgets/tw-button.md"}'),n={name:"widgets/tw-button.md"},e=a(`<h1 id="twbutton" tabindex="-1">TwButton <a class="header-anchor" href="#twbutton" aria-label="Permalink to &quot;TwButton&quot;">​</a></h1><p>TailwindCLI provides you a really helpful widget <code>TwButton</code> and an extension <code>isButton</code> to easily create a <code>Button</code> widget for your app&#39;s Layout.</p><table><thead><tr><th><strong>Tw Widget</strong></th><th><strong>Flutter Widget</strong></th></tr></thead><tbody><tr><td>TwButton</td><td>Some Widgets To Make A Clickable Button UI</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You have 2 options to create a <code>Button</code> UI in your app while using <code>TailwindCLI</code> for your app.</p><ol><li><code>TwButton</code> Widget <ul><li>You can directly use this Widget to get a Button UI and start styling it by built in extensions for all posible styles.</li></ul></li><li><code>.isButton</code> extension method <ul><li>Or you can use this extension method on <code>Button</code> UI that will convert it to <code>TwButton</code> and provides you the extensions for all posible styling and return <code>Button</code> UI built using some Widgets.</li></ul></li></ol></div><p>No matter what you use for creating Button you will get the flutter&#39;s <code>Button</code> UI built using some Widgets at the end.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ul><li><code>TwButton</code>: Widget</li><li><code>.isButton</code>: Extension</li></ul><p><code>TwButton</code> and <code>.isButton</code> are just helpful Widget and extension to provide Button UI.</p><p><code>TwButton</code> is a wrapper widget around the <code>Widget</code>&#39;s which allows you to create Button UI with ease.</p><table><thead><tr><th><strong>Tw Widget</strong></th><th><strong>Flutter Widget</strong></th></tr></thead><tbody><tr><td>TwButton()</td><td>Some Widgets To Make A Clickable Button UI</td></tr></tbody></table><p><code>.isButton</code> is a helpful extension which creates a Button UI using some required Widgets.</p><table><thead><tr><th><strong>Tw Widget</strong></th><th><strong>Flutter Widget</strong></th></tr></thead><tbody><tr><td>.isButton</td><td>Some Widgets To Make A Clickable Button UI</td></tr></tbody></table><h3 id="twbutton-widget" tabindex="-1">TwButton widget <a class="header-anchor" href="#twbutton-widget" aria-label="Permalink to &quot;TwButton widget&quot;">​</a></h3><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Widget</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BuildContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> contexr){</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TwButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        child</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TwText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am a TwButton&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">primaryColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Primary Color From Theme</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button Clicked.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Add on Tap action directly</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>Provides a Button UI for your app with <code>primary</code> color from theme.</p></blockquote><h3 id="isbutton-extension" tabindex="-1">.isButton extension <a class="header-anchor" href="#isbutton-extension" aria-label="Permalink to &quot;.isButton extension&quot;">​</a></h3><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Widget</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BuildContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> contexr){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        child</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TwText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am a TwButton&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .isButton </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// It&#39;s Magic: By using this</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">primaryColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// You will be able to do this</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button Clicked.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// and this</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// and this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>Provides a Button UI for your app with <code>primary</code> color from theme with <code>onTap</code> action.</p></blockquote><h2 id="twbutton-constructor" tabindex="-1">TwButton Constructor <a class="header-anchor" href="#twbutton-constructor" aria-label="Permalink to &quot;TwButton Constructor&quot;">​</a></h2><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TwButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">required</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.child})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="twbutton-properties" tabindex="-1">TwButton properties <a class="header-anchor" href="#twbutton-properties" aria-label="Permalink to &quot;TwButton properties&quot;">​</a></h2><ul><li><code>Widget</code> <strong><em>child</em></strong>: Child to render inside the Button UI mostly it will be <code>Text</code></li></ul><h2 id="api-references" tabindex="-1">Api References <a class="header-anchor" href="#api-references" aria-label="Permalink to &quot;Api References&quot;">​</a></h2><p><code>TwButton</code> includes some handy extensions and methods which can help you add styling or functionality to button.</p><h3 id="internal-methods" tabindex="-1">Internal Methods <a class="header-anchor" href="#internal-methods" aria-label="Permalink to &quot;Internal Methods&quot;">​</a></h3><p>TwButton has some built in methods to provide styles to the Button UI. These methods are specifically defined for the Button UI.</p><table><thead><tr><th>Method</th><th>What it does</th></tr></thead><tbody><tr><td>.withConstraints(BoxConstraints constraints)</td><td>Adds BoxContraints to the Button UI</td></tr><tr><td>.color(Color color)</td><td>Provides Color to Button UI</td></tr><tr><td>.transform(Matrix4 val)</td><td>Adds transformation</td></tr><tr><td>.clip(Clip clip)</td><td>Clip the Button UI</td></tr><tr><td>.setBusy(bool isBusy)</td><td>Sets Button State to Busy (Shows loading indicator)</td></tr><tr><td>.setBusyWidget(Widget? busyWidget)</td><td>Adds custom loading indicator</td></tr><tr><td>.withBorder(Border border)</td><td>Adds custom border</td></tr><tr><td>.linearGradient(LinearGradient linearGradient)</td><td>Adds Linear Gradient</td></tr><tr><td>.radialGradient(RadialGradient radialGradient)</td><td>Adds Radial Gradient</td></tr><tr><td>.sweepGradient(SweepGradient sweepGradient)</td><td>Adds Sweep Gradient</td></tr></tbody></table><h3 id="methods-extensions-from-mixins" tabindex="-1">Methods &amp; Extensions from Mixins <a class="header-anchor" href="#methods-extensions-from-mixins" aria-label="Permalink to &quot;Methods &amp; Extensions from Mixins&quot;">​</a></h3><table><thead><tr><th>Mixins Extensions</th><th>Mixins Methods</th></tr></thead><tbody><tr><td><a href="/tailwind-cli/mixins/alignment.html#extensions">Alignment</a></td><td><a href="/tailwind-cli/mixins/alignment.html#methods">Alignment</a></td></tr><tr><td><a href="/tailwind-cli/mixins/border.html#extensions">Borders</a></td><td>N/A</td></tr><tr><td><a href="/tailwind-cli/mixins/colors.html#extensions">Colors</a></td><td><a href="/tailwind-cli/mixins/colors.html#methods">Colors</a></td></tr><tr><td><a href="/tailwind-cli/mixins/gestures.html#extensions">Gestures</a></td><td><a href="/tailwind-cli/mixins/gestures.html#methods">Gestures</a></td></tr><tr><td><a href="/tailwind-cli/mixins/gradients.html#extensions">Gradients</a></td><td><a href="/tailwind-cli/mixins/gradients.html#methods">Gradients</a></td></tr><tr><td><a href="/tailwind-cli/mixins/margins.html#extensions">Margins</a></td><td><a href="/tailwind-cli/mixins/margins.html#methods">Margins</a></td></tr><tr><td><a href="/tailwind-cli/mixins/paddings.html#extensions">Paddings</a></td><td><a href="/tailwind-cli/mixins/paddings.html#methods">Paddings</a></td></tr><tr><td><a href="/tailwind-cli/mixins/roundness.html#extensions">Roundness</a></td><td><a href="/tailwind-cli/mixins/roundness.html#methods">Roundness</a></td></tr><tr><td><a href="/tailwind-cli/mixins/shadow.html#extensions">Shadows</a></td><td><a href="/tailwind-cli/mixins/shadow.html#methods">Shadows</a></td></tr><tr><td><a href="/tailwind-cli/mixins/size.html#extensions">Size</a></td><td>N/A</td></tr></tbody></table>`,29),d=[e];function l(r,o,h,p,k,c){return i(),s("div",null,d)}const E=t(n,[["render",l]]);export{g as __pageData,E as default};
