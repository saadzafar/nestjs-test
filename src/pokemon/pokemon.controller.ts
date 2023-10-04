import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @UseInterceptors(CacheInterceptor) // Note: only works on GET endpoints
  @CacheTTL(60000) // override TTL to 1 minute (default 5 seconds)
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    return await this.service.getPokemon(+id);
  }
}
