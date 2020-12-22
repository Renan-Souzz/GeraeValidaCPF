export default class ValidarCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    Sequencial() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) == this.cpfLimpo;

    }

    geraNovoCpf() {
        const cpfSemdig = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidarCPF.geraDigito(cpfSemdig);
        const digito2 = ValidarCPF.geraDigito(cpfSemdig + digito1);
        this.novoCPF = cpfSemdig + digito1 + digito2;
    }

    static geraDigito(cpfSemdig) {
        let total = 0;
        let reverso = cpfSemdig.length + 1;

        for (let stringNumber of cpfSemdig) {
            total += reverso * Number(stringNumber);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
        console.log(total);
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.Sequencial()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;

    }
}