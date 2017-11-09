import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class HelloComponent extends Vue {
    helloString: string = 'Hello from Vue';
}