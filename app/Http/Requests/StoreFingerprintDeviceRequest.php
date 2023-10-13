<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFingerprintDeviceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=> 'nullable',
            'user_id' => 'exists:users,id',
            'start_time' => 'string|max:100',
            'end_time' => 'string|max:100',
            'all_time' => 'nullable',
            'status_time' => 'nullable',
            'total_time' => 'nullable',
        ];
    }
}
