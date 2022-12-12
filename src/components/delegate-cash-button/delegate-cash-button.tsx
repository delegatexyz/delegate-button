import { Component, State, Prop, h, Event, EventEmitter, Method, Element, Watch } from '@stencil/core';
import { truncateWallet, getDelegations } from '../../utils/utils';

@Component({
  tag: 'delegate-cash-button',
  styleUrl: 'delegate-cash-button.scss',
  shadow: false,
})
export class DelecateCashButton {
  @Element() host: HTMLElement;

  /** The main label (eg. "Mint", "Purchase") */
  @Prop() label: string;
  /** The current connected wallet */
  @Prop() connectedWallet: string;
  /** The rpc url of the network you want to use */
  @Prop() rpcUrl!: string;
  /** Auto-select a vault instead of connected wallet */
  @Prop() defaultWalletSelection: string;
  /** Filter delegations by contract approval */
  @Prop() contract: string;
  /** Filter delegations by tokenId approval */
  @Prop() tokenId: string;
  /** Whether the button is disabled or not */
  @Prop() disabled: boolean;
  /** Light or Dark theme */
  @Prop() theme: 'light' | 'dark' | string = 'light';
   /** Default text if there is no connected wallet */
   @Prop() defaultNoWalletLabel: string = "Connect Wallet";
  /** If you want rounded corners */
  @Prop() rounded: boolean = false;
  /** Force dropdown to be open */
  @Prop() forceDropdown: boolean = false;

  @State() selectedWallet: string = '';
  @State() delegations: string[] = [];
  @State() showDropdown: boolean = false;

  @Event() buttonClick: EventEmitter<string>;
  buttonClickHandler(wallet: string) {
    this.buttonClick.emit(wallet);
  }

  @Event() walletSelect: EventEmitter<string>;
  walletSelectHandler(wallet: string) {
    this.walletSelect.emit(wallet);
  }

  @Watch('connectedWallet')
  connectedWalletPropHandler(newValue: string) {
    this.updateConnectedWallet(newValue);
  }

  @Watch('rpcUrl')
  rpcUrlPropHandler() {
    this.delegations = [];
    this.refresh();
  }

  async componentWillLoad() {
    this.selectedWallet = this.connectedWallet;

    this.delegations = await getDelegations(
      this.selectedWallet,
      this.rpcUrl,
      this.contract,
      this.tokenId,
    );

    // default selection logic
    if (
      this.defaultWalletSelection &&
      this.delegations.includes(this.defaultWalletSelection.toLowerCase())
    ) {
      this.selectedWallet = this.defaultWalletSelection.toLocaleLowerCase();
    }
  }

  async componentDidLoad() {
    this.addClasses();
  }

  @Method()
  async refresh() {
    this.delegations = await getDelegations(
      this.selectedWallet,
      this.rpcUrl,
      this.contract,
      this.tokenId,
    );
  }

  @Method()
  async updateSelectedWallet(newWallet: string) {
    if (this.delegations.includes(newWallet.toLowerCase()) || this.connectedWallet == newWallet) {
      this.selectedWallet = newWallet;
    }
  }

  @Method()
  async updateConnectedWallet(newWallet: string) {
    this.delegations = [];
    this.selectedWallet = newWallet;
    this.refresh();
  }

  private addClasses() {
    const classList = ['dc'];
    const dc = this.host.children.item(0);

    if (dc) {

      if(this.disabled) classList.push('dc__disabled');

      if (this.theme === 'light') classList.push('dc_theme__light');

      if (this.theme === 'dark') classList.push('dc_theme__dark');

      if (this.rounded) classList.push('dc_style__rounded');

      if (this.delegations.length === 0 || this.disabled) classList.push('dc_no_delegations');

      if (!this.label) classList.push('dc_no_label');

      if (this.showDropdown || this.forceDropdown) {
        classList.push('dc_dropdown_active');
      }

      dc.classList.value = classList.join(' ');
    }
  }

  render() {
    this.addClasses();

    return (
      <div class="dc">
        <button
          class="dc__label_container"
          onClick={() => this.buttonClickHandler(this.selectedWallet)}
        >
          {this.label ? <p class="dc__label_container__label">{this.label}</p> : ""}
          <p class="dc__label_container__sublabel">
            {this.selectedWallet !== this.connectedWallet ? <img src="https://delegate.cash/images/mediakit/logo.png" /> : ""}
            { this.connectedWallet ? this.delegations.length ? truncateWallet(this.selectedWallet) : truncateWallet(this.connectedWallet) : this.defaultNoWalletLabel }
          </p>
        </button>
        {this.delegations.length > 0 && !this.disabled ? (
          <div class="dc__arrow" onClick={() => (this.showDropdown = !this.showDropdown)}>
            <button class="dc__arrow__button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            {this.showDropdown || this.forceDropdown ? (
              <nav class="dc__dropdown">
                <div
                  class={`dc__dropdown__item${
                    this.selectedWallet == this.connectedWallet ? ' dc_active' : ''
                  }`}
                  onClick={() => {
                    this.selectedWallet = this.connectedWallet;
                    this.walletSelectHandler(this.connectedWallet);
                  }}
                >
                  {truncateWallet(this.connectedWallet, 7, 7)}
                </div>

                {this.delegations.map(delegate => (
                  <div
                    class={`dc__dropdown__item${
                      this.selectedWallet == delegate ? ' dc_active' : ''
                    }`}
                    onClick={() => {
                      this.selectedWallet = delegate;
                      this.walletSelectHandler(delegate);
                    }}
                  >
                    {delegate !== this.connectedWallet ? <img src="https://delegate.cash/images/mediakit/logo.png" /> : ""}
                    {truncateWallet(delegate, 7, 7)}
                  </div>
                ))}
              </nav>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
